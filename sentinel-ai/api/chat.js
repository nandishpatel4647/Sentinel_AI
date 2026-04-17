const FALLBACK_RESPONSES = {
  'what is phishing': `**Phishing** is a type of cyber attack where criminals pretend to be someone you trust — like your bank, boss, or a popular service — to trick you into giving up sensitive information. Think of it like a fisherman casting bait: the attacker sends out convincing-looking emails, texts, or messages hoping someone will "bite."

The most common form is email phishing, where you receive a message that looks legitimate but contains malicious links or asks you to enter your password on a fake website. These attacks work because they exploit human psychology — urgency, fear, and trust.

Modern phishing has evolved beyond simple emails. **Spear phishing** targets specific individuals with personalized messages, while **smishing** uses SMS texts, and **vishing** uses phone calls.

💡 Pro Tip: Always hover over links before clicking to check the actual URL destination. If an email creates urgency or asks for credentials, go directly to the website by typing the address yourself.`,

  'how to spot a fake url': `Spotting fake URLs is one of the most important cybersecurity skills you can develop. Attackers create URLs that look almost identical to legitimate ones, but with subtle differences designed to fool you.

**Key things to check:**
- **Domain spelling**: Look for misspellings like "amaz0n.com" or "paypa1.com"
- **Subdomain tricks**: "login.bank.evil-site.com" — the real domain here is "evil-site.com"
- **HTTPS isn't enough**: A padlock icon doesn't mean a site is safe, just that the connection is encrypted
- **URL shorteners**: Links from bit.ly or tinyurl can hide malicious destinations

💡 Pro Tip: When in doubt, don't click the link. Instead, open your browser and manually type the website address you want to visit.`,

  'what is social engineering': `**Social engineering** is the art of manipulating people into giving up confidential information or performing actions that compromise security. Unlike technical hacking, social engineering attacks the human element — which is often the weakest link in any security system.

Think of it like a con artist's toolkit. Instead of breaking through a locked door (hacking a system), social engineers convince someone to hand over the key. Common techniques include **pretexting**, **baiting**, **tailgating**, and **quid pro quo**.

💡 Pro Tip: Before sharing any sensitive information, verify the person's identity through a separate communication channel — like calling them directly on a known phone number.`,

  'how does malware spread': `**Malware** spreads through several common vectors:

**📧 Email attachments** — Malicious files disguised as invoices, documents, or images
**🌐 Infected websites** — Drive-by downloads that exploit browser vulnerabilities
**💾 USB drives** — Physical media left in public places (baiting attacks)
**📦 Software bundles** — Malware hidden in free software downloads
**🔗 Malicious links** — URLs that trigger automatic downloads

Modern malware is increasingly sophisticated, using **fileless** techniques that run entirely in memory, making detection harder.

💡 Pro Tip: Keep your operating system and all software updated. Most malware exploits known vulnerabilities that patches have already fixed.`,

  'why use urgency in scams': `**Urgency is the #1 weapon in a scammer's arsenal** because it bypasses your critical thinking. When you feel pressured to act immediately, your brain switches from careful analysis mode to reactive mode.

Phrases like "Your account will be closed in 24 hours!" or "Act now or lose access!" trigger stress hormones that make you more likely to click without thinking. Scammers know that if you take even 5 minutes to think, you'll realize it's fake.

Legitimate organizations understand that important decisions shouldn't be rushed. Your bank will never demand you click a link within minutes.

💡 Pro Tip: Make it a personal rule — the more urgent a message feels, the slower you should respond.`,

  'how to protect my email': `**Email is the #1 attack vector for cybercriminals**. Here's how to protect it:

**🔐 Authentication:**
- Use a strong, unique password (at least 16 characters)
- Enable two-factor authentication (2FA)
- Never reuse your email password anywhere else

**🛡️ Defense habits:**
- Don't click links in unexpected emails
- Check sender addresses carefully
- Be suspicious of attachments you weren't expecting

💡 Pro Tip: Set up login alerts for your email account so you're immediately notified of any access from unfamiliar devices.`
};

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'Message is required.' });
    }

    const lowerMsg = message.toLowerCase().trim();
    let response = null;

    for (const [key, value] of Object.entries(FALLBACK_RESPONSES)) {
      if (lowerMsg.includes(key) || key.split(' ').every(word => lowerMsg.includes(word))) {
        response = value;
        break;
      }
    }

    if (!response) {
      response = `That's a great question about cybersecurity! Here are key security principles to always remember:

**Key security principles:**
- **Verify before you trust** — always confirm identities through independent channels
- **Think before you click** — hover over links and check URLs carefully
- **Keep everything updated** — software updates patch known vulnerabilities
- **Use strong, unique passwords** — consider a password manager
- **Enable two-factor authentication** — adds a critical extra layer of protection

💡 Pro Tip: Make cybersecurity awareness a daily habit, not just a one-time training. The threat landscape changes constantly, and staying informed is your best defense.`;
    }

    return res.status(200).json({ success: true, response });

  } catch (err) {
    console.error('Chat error:', err);
    return res.status(500).json({ error: 'Chat failed. Please try again.' });
  }
}
