export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <div className="brand-logo">آ</div>
        <div>
          <div className="brand-text-main">آریو املاک</div>
          <div className="brand-text-sub">پلتفرم هوشمند خرید و فروش ملک</div>
        </div>
      </div>

      <nav className="nav">
        <a href="#properties">خرید</a>
        <a href="#neighborhoods">محله‌ها</a>
        <a href="#services">خدمات و وام</a>
        <a href="#insights">بینش بازار</a>
        <a href="#contact">تماس با ما</a>
      </nav>

      <div className="nav-actions">
        <button className="btn btn-outline">ورود</button>
        <button className="btn btn-primary">ثبت‌نام</button>
        <div className="burger" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
