export default function Loading() {
  return (
    <div id="bakery-preloader" className="preloader-loading-screen" aria-hidden="true">
      <div className="preloader-content">
        <img
          src="/images/logo.jpg"
          alt="Nossa Casa Bakery Logo"
          className="preloader-logo"
        />
        <div className="loading-spinner" />
      </div>
    </div>
  )
}
