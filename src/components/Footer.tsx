const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p className="font-mono text-xs">
        © {new Date().getFullYear()} Matías Peña. Bahía Blanca, Argentina.
      </p>
      <p className="font-mono text-xs">
        Hecho con <span className="text-primary">♥</span> y mucho código
      </p>
    </div>
  </footer>
);

export default Footer;
