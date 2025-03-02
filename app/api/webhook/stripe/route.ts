import Stripe from "stripe";
import { NextResponse } from "next/server";
import { createOrder } from "@/lib/actions/order.actions";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature") as string;
  const body = await req.text();

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    const errorMessage = (err as Error).message;
    NextResponse.json(
      { message: `Webhook Error: ${errorMessage}` },
      { status: 400 }
    );
    return;
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const { id, amount_total, metadata } = event.data.object;
      const order = {
        stripeId: id,
        eventId: metadata?.eventId || "",
        buyerId: metadata?.buyerId || "",
        totalAmount: amount_total ? amount_total.toFixed(0) : "0",
        createdAt: new Date(),
      };

      const newOrder = await createOrder(order);
      return NextResponse.json(
        { message: "Ok", order: newOrder },
        { status: 200 }
      );
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return new Response("", { status: 200 });
}
