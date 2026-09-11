# DevOps DeepDive Training Website

A responsive static website for DevOps + AWS Cloud training.

## Files

- index.html - website structure/content
- styles.css - complete responsive design
- script.js - mobile menu, active navigation and enquiry form
- README.md - deployment instructions

## Before publishing

Replace these sample details in `index.html`:

- info@devopsdeepdive.com
- +91 98765 43210
- WhatsApp number
- Telegram / YouTube / LinkedIn / GitHub links
- Course prices
- Course/batch details

### Registration Google Form

If you have a Google Form registration URL, replace:

`href="#register"`

on the Register Now / Enroll Now buttons with your Google Form URL, for example:

`href="YOUR_GOOGLE_FORM_URL" target="_blank" rel="noopener"`

The current enquiry form opens the visitor's email client. For a real website, you can connect it to Google Forms, Formspree, a PHP/Node backend, or another form service.

## Deploy on Ubuntu/Amazon Linux with Nginx

### Ubuntu

```bash
sudo apt update
sudo apt install -y nginx
sudo systemctl enable --now nginx

sudo mkdir -p /var/www/devopsdeepdive
sudo cp -r index.html styles.css script.js /var/www/devopsdeepdive/

sudo tee /etc/nginx/sites-available/devopsdeepdive <<'EOF'
server {
    listen 80;
    server_name YOUR_DOMAIN;

    root /var/www/devopsdeepdive;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
EOF

sudo ln -s /etc/nginx/sites-available/devopsdeepdive /etc/nginx/sites-enabled/devopsdeepdive
sudo nginx -t
sudo systemctl reload nginx
```

### Amazon Linux

```bash
sudo dnf install -y nginx
sudo systemctl enable --now nginx

sudo mkdir -p /usr/share/nginx/html/devopsdeepdive
sudo cp -r index.html styles.css script.js /usr/share/nginx/html/devopsdeepdive/
```

For Amazon Linux, configure the Nginx server block according to your domain.

## AWS EC2 checklist

1. Launch an EC2 Linux instance.
2. Allow inbound TCP 80 in the Security Group.
3. Upload the three website files.
4. Install and start Nginx.
5. Point your domain DNS A record to the EC2 public/Elastic IP.
6. Add HTTPS with Certbot after DNS is working.

## HTTPS with Certbot on Ubuntu

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d YOUR_DOMAIN
sudo systemctl status certbot.timer
```

## Production recommendations

For a real training business website, add:

- Google Analytics / privacy-friendly analytics
- Google Form or backend registration
- WhatsApp click-to-chat
- Testimonials
- Course schedule / next batch date
- Refund policy
- Privacy policy
- Terms and conditions
- SEO title/description
- Open Graph image
- Favicon
- SSL/HTTPS
- CAPTCHA/spam protection for forms
