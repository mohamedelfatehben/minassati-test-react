function SignUpNow() {
  const appSettings = JSON.parse(localStorage.getItem("app_settings")) || {};
  const { secondary_color = "#FF9900", primary_color_light = "#9747FF" } =
    appSettings;

  return (
    <div
      className="text-white px-6"
      style={{ backgroundColor: primary_color_light }}
    >
      <div className="content flex gap-10 items-center">
        <img src="/Check Profile.png" alt="check icon" className="" />
        <div className="max-w-2xl flex flex-col gap-y-4">
          <h2 className="text-3xl font-semibold">
            سجل الآن وابدأ رحلتك التعليمية
          </h2>
          <p className="text-xl">
            إنضم إلينا الآن وابدأ رحلتك التعليمية لتطوير مهارات جديدة وتحقيق
            طموحاتك الشخصية والمهنية
          </p>
          <button
            className="rounded-3xl px-3 py-2 w-fit"
            style={{ backgroundColor: secondary_color }}
          >
            {" "}
            سجل معنا الأن
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpNow;
