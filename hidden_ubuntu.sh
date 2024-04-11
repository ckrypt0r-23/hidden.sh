#!/bin/bash

echo "Installiere Node.js..."
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs

echo "Installiere Git..."
sudo apt-get install -y git

echo "Installiere Tor..."
sudo apt-get install -y tor

echo "Klone das Webshop-Repository..."
git clone https://github.com/your-username/your-webshop-repo.git /var/www/webshop

echo "Navigiere zum Verzeichnis..."
cd /var/www/webshop

echo "Installiere Abhängigkeiten..."
npm install

echo "Baue den Webshop..."
npm run build

echo "Erstelle die Tor-Konfigurationsdatei..."
echo "HiddenServiceDir /var/www/webshop/hidden_service" | sudo tee -a /etc/tor/torrc
echo "HiddenServicePort 80 127.0.0.1:80" | sudo tee -a /etc/tor/torrc

echo "Starte den Tor-Dienst neu..."
sudo systemctl restart tor

echo "Warte 10 Sekunden, damit Tor die Konfiguration lädt..."
sleep 10

echo "Erhalte die Onion-Adresse des Hidden Service..."
sudo cat /var/www/webshop/hidden_service/hostname

echo "Fertiggestellt!"
