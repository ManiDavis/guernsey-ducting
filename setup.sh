#!/bin/bash
set -e

echo ""
echo "  Guernsey Ducting — project setup"
echo "  ================================="
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
  echo "  Node.js is not installed."
  echo "  Download it from https://nodejs.org (LTS version)"
  exit 1
fi

NODE_VERSION=$(node -v)
echo "  Node.js $NODE_VERSION detected"

# Install dependencies
echo ""
echo "  Installing dependencies..."
npm install
echo "  Done."

# Create .env.local if missing
ENV_FILE=".env.local"
if [ -f "$ENV_FILE" ]; then
  echo ""
  echo "  .env.local already exists — skipping."
else
  echo ""
  echo "  Creating .env.local..."
  cat > "$ENV_FILE" << 'EOF'
NEXT_PUBLIC_SANITY_PROJECT_ID=4574t188
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=skPMl1K1uL1RO5Qh6Vmx8KUf8VjELKcTqGP8L8qgeQQhJs3No5tziCDZ4wP8TfngM8P1HrE69ELmazd4roSVCKp7jJOSwfRCyr6pRCtLOGNK2b5crKedHcZxK3rLr94iMTGqqYMWIzgFAlznqsfJuMAJo6J35BzyizGKiCYMnENsgyOp2CsZ
EOF
  echo "  .env.local created."
fi

echo ""
echo "  Setup complete."
echo ""
echo "  To start the dev server:"
echo "    npm run dev"
echo ""
echo "  Then open:"
echo "    Site   -> http://localhost:3000"
echo "    Studio -> http://localhost:3000/studio"
echo ""
