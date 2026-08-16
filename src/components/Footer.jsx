export default function Footer() {
  return (
    <footer className="footer container-fluid">
      <div className="row justify-content-center text-center py-4">

        {/* Nombre */}
        <div className="col-12">
          <p className="footer-name">Garima Tejnani Sukhnani</p>
        </div>

        {/* Línea decorativa */}
        <div className="col-12">
          <div className="footer-divider"></div>
        </div>

        {/* Copyright */}
        <div className="col-12 mt-3">
          <p className="footer-copy">© 2026 Todos los derechos reservados</p>
        </div>

      </div>
    </footer>
  );
}
