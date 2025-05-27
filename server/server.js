const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");
require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);



const app = express();
app.use(cors());
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  const { priceId } = req.body;

  // Controllo se priceId è presente
  if (!priceId) {
    return res.status(400).json({ error: "⚠️ 'priceId' mancante nella richiesta" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],

      success_url: `http://localhost:3000/Planmanuh/success?priceId=${priceId}`,
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("❌ Errore Stripe:", error.message);
    console.error(error);
    res.status(500).json({ error: "Errore durante la creazione della sessione Stripe" });
  }
});

app.listen(4242, () => console.log("✅ Server Stripe attivo su http://localhost:4242"));
