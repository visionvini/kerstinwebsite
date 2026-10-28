#!/bin/bash
# Nur Staging: Logo zur Build-Zeit vom alten Jimdo-CDN holen (aus der Entwicklungsumgebung nicht erreichbar).
mkdir -p public
for u in "https://irp.cdn-website.com/e77b7d46/dms3rep/multi/opt/KB-Logo+Final-1-1920w.png" "https://irp.cdn-website.com/e77b7d46/dms3rep/multi/opt/KB-Logo+Final-1-240w.png"; do
  curl -fsSL --max-time 30 -o public/kb-logo.png "$u" && [ -s public/kb-logo.png ] && echo "logo ok" && exit 0
done
echo "logo fehlt"; rm -f public/kb-logo.png; exit 0
