/* ---------------- LANGUAGE / i18n ---------------- */
let currentLang = localStorage.getItem('siteLang') || 'vi';

const I18N = {
    navSolar: {
        vi: 'Vũ trụ 3D',
        en: '3D Universe'
    },
    navPlanets: {
        vi: 'Hành tinh',
        en: 'Planets'
    },
    navQuiz: {
        vi: 'Đố vui',
        en: 'Quiz'
    },
    navLogin: {
        vi: 'Đăng nhập',
        en: 'Log In'
    },
    navRegister: {
        vi: 'Đăng ký',
        en: 'Sign Up'
    },
    navLogout: {
        vi: 'Đăng xuất',
        en: 'Log Out'
    },
    navHome: {
        vi: 'Trang chủ',
        en: 'Home'
    },
    heroCta: {
        vi: 'Khám phá mô hình 3D →',
        en: 'Explore the 3D model →'
    },
    flyStart: {
        vi: '🚀 Bay cùng hành tinh',
        en: '🚀 Fly alongside'
    },
    flyActive: {
        vi: '⏹ Dừng bay cùng',
        en: '⏹ Stop flying along'
    },
    sunEyebrow: {
        vi: 'Ngôi sao trung tâm',
        en: 'The central star'
    },
    sunName: {
        vi: 'Mặt Trời',
        en: 'The Sun'
    },
    sunDesc: {
        vi: 'Ngôi sao ở trung tâm hệ Mặt Trời, chiếm hơn 99,8% khối lượng toàn hệ. Là quả cầu plasma khổng lồ, tạo ra ánh sáng và nhiệt qua phản ứng nhiệt hạch trong lõi.',
        en: 'The star at the center of the solar system, holding over 99.8% of the system\'s total mass. A giant ball of plasma that generates light and heat through nuclear fusion in its core.'
    },
    sunType: {
        vi: 'Loại sao',
        en: 'Star type'
    },
    sunTypeVal: {
        vi: 'Sao lùn vàng loại G',
        en: 'G-type yellow dwarf'
    },
    sunSurfaceTemp: {
        vi: 'Nhiệt độ bề mặt',
        en: 'Surface temperature'
    },
    sunAge: {
        vi: 'Tuổi',
        en: 'Age'
    },
    sunAgeVal: {
        vi: '~4,6 tỷ năm',
        en: '~4.6 billion years'
    },
    speedLabel: {
        vi: 'Tốc độ quỹ đạo',
        en: 'Orbit speed'
    },
    sunViewIn3d: {
        vi: 'Xem trong mô hình 3D →',
        en: 'View in the 3D model →'
    },
    heroEyebrow: {
        vi: 'Du hành liên hành tinh · 3D tương tác',
        en: 'Interplanetary travel · interactive 3D'
    },
    heroTitle: {
        vi: 'Chạm vào<br>Hệ Mặt Trời',
        en: 'Touch the<br>Solar System'
    },
    heroDesc: {
        vi: 'Tám hành tinh, một ngôi sao, và hàng tỷ km bóng tối giữa chúng. Kéo để xoay, chạm vào một hành tinh để khám phá.',
        en: 'Eight planets, one star, and billions of kilometers of darkness between them. Drag to rotate, tap a planet to explore.'
    },
    heroHint: {
        vi: 'Kéo · Chạm để khám phá',
        en: 'Drag · Tap to explore'
    },
    heroGoto: {
        vi: 'Xem thông tin chi tiết →',
        en: 'View full details →'
    },
    statDiameter: {
        vi: 'Đường kính',
        en: 'Diameter'
    },
    statDistance: {
        vi: 'Khoảng cách tới Mặt Trời',
        en: 'Distance from Sun'
    },
    statMoons: {
        vi: 'Số vệ tinh',
        en: 'Moons'
    },
    statDay: {
        vi: 'Một ngày dài',
        en: 'Day length'
    },
    statTemp: {
        vi: 'Nhiệt độ',
        en: 'Temperature'
    },
    planetsTag: {
        vi: 'Danh mục hành tinh',
        en: 'Planet catalog'
    },
    planetsTitle: {
        vi: 'Tám thế giới, tám câu chuyện',
        en: 'Eight worlds, eight stories'
    },
    planetSearchPh: {
        vi: 'Tìm hành tinh…',
        en: 'Search planets…'
    },
    compareBtn: {
        vi: 'So sánh hành tinh',
        en: 'Compare planets'
    },
    compareBackBtn: {
        vi: 'Quay lại danh sách',
        en: 'Back to list'
    },
    notFoundPlanet: {
        vi: 'Không tìm thấy hành tinh nào.',
        en: 'No planets found.'
    },
    footerNasa: {
        vi: 'Dữ liệu tham khảo NASA',
        en: 'Data referenced from NASA'
    },
    footerBuilt: {
        vi: 'Trải nghiệm 3D dựng bằng',
        en: '3D experience built with'
    },
    quizTag: {
        vi: 'Kiến thức vũ trụ',
        en: 'Space knowledge'
    },
    quizTitle: {
        vi: 'Đố vui về hệ Mặt Trời',
        en: 'Solar System Quiz'
    },
    quizSub: {
        vi: 'Trả lời 6 câu hỏi để kiểm tra hiểu biết của bạn.',
        en: 'Answer 6 questions to test your knowledge.'
    },
    quizReady: {
        vi: 'Sẵn sàng?',
        en: 'Ready?'
    },
    quizIntroTitle: {
        vi: 'Kiểm tra kiến thức vũ trụ của bạn',
        en: 'Test your space knowledge'
    },
    quizStart: {
        vi: 'Bắt đầu',
        en: 'Start'
    },
    quizResult: {
        vi: 'Kết quả',
        en: 'Result'
    },
    quizScoreLine: {
        vi: 'Bạn đạt',
        en: 'You scored'
    },
    quizPoints: {
        vi: 'điểm',
        en: 'points'
    },
    quizExcellent: {
        vi: 'Xuất sắc! Bạn thực sự am hiểu vũ trụ.',
        en: 'Excellent! You really know your way around space.'
    },
    quizKeepGoing: {
        vi: 'Tiếp tục khám phá để nắm rõ hơn về hệ Mặt Trời nhé.',
        en: 'Keep exploring to learn more about the solar system.'
    },
    quizRetry: {
        vi: 'Làm lại',
        en: 'Try again'
    },
    quizQuestionLabel: {
        vi: 'Câu',
        en: 'Question'
    },
    quizScoreLabel: {
        vi: 'Điểm',
        en: 'Score'
    },
    quizNewBest: {
        vi: 'Kỷ lục mới!',
        en: 'New personal best!'
    },
    quizBestScore: {
        vi: 'Điểm cao nhất',
        en: 'Best score'
    },
    quizShare: {
        vi: 'Chia sẻ kết quả',
        en: 'Share result'
    },
    quizShareCopied: {
        vi: 'Đã sao chép ✓',
        en: 'Copied ✓'
    },
    quizPointsLabel: {
        vi: 'điểm',
        en: 'pts'
    },
    quizRulesLives: {
        vi: '3 mạng — trả lời sai hoặc hết giờ sẽ mất 1 mạng',
        en: '3 lives — a wrong answer or time-out costs one life'
    },
    quizRulesTimer: {
        vi: 'Mỗi câu có 12 giây để trả lời',
        en: '12 seconds to answer each question'
    },
    quizRulesCombo: {
        vi: 'Trả lời đúng liên tiếp để nhân điểm combo',
        en: 'Chain correct answers for a combo score bonus'
    },
    quizGameOver: {
        vi: 'Hết mạng rồi!',
        en: 'Game Over'
    },
    quizGameOverDesc: {
        vi: 'Bạn đã dùng hết 3 mạng. Thử lại để phá kỷ lục nhé!',
        en: 'You ran out of lives. Try again to beat your record!'
    },
    quizAccuracy: {
        vi: 'độ chính xác',
        en: 'accuracy'
    },
    quizMaxCombo: {
        vi: 'combo cao nhất',
        en: 'best combo'
    },
    quizTimeUp: {
        vi: 'Hết giờ!',
        en: "Time's up!"
    },
    heroFactTag: {
        vi: 'Bạn có biết?',
        en: 'Did you know?'
    },
    weightLabel: {
        vi: 'Cân nặng của bạn (kg)',
        en: 'Your weight (kg)'
    },
    weightOn: {
        vi: 'trên',
        en: 'on'
    },
    bonusTag: {
        vi: 'Ngoài tám hành tinh',
        en: 'Beyond the eight planets'
    },
    bonusTitle: {
        vi: 'Còn gì khác trong hệ Mặt Trời?',
        en: 'What else is out there?'
    },
    asteroidTitle: {
        vi: '☄️ Vành đai tiểu hành tinh',
        en: '☄️ Asteroid Belt'
    },
    asteroidDesc: {
        vi: 'Nằm giữa Sao Hỏa và Sao Mộc, chứa hàng triệu khối đá còn sót lại từ thuở hình thành hệ Mặt Trời. Ceres, hành tinh lùn lớn nhất khu vực này, cũng nằm ở đây.',
        en: 'Located between Mars and Jupiter, home to millions of leftover rocky bodies from the solar system\'s formation. Ceres, the largest dwarf planet here, also resides in this belt.'
    },
    dwarfTitle: {
        vi: '🪐 Hành tinh lùn',
        en: '🪐 Dwarf Planets'
    },
    dwarfDesc: {
        vi: 'Sao Diêm Vương, Eris, Haumea, Makemake và Ceres không đủ tiêu chí để là hành tinh chính thức, nhưng vẫn đủ lớn để có hình cầu nhờ trọng lực của chính chúng.',
        en: 'Pluto, Eris, Haumea, Makemake and Ceres don\'t meet the criteria for full planet status, but are massive enough for their own gravity to pull them into a sphere.'
    },
    kuiperTitle: {
        vi: '🧊 Vành đai Kuiper',
        en: '🧊 Kuiper Belt'
    },
    kuiperDesc: {
        vi: 'Vùng băng giá phía ngoài Sao Hải Vương, nơi lưu giữ những "hóa thạch" băng đá từ 4,6 tỷ năm trước — bao gồm cả Sao Diêm Vương.',
        en: 'A frozen region beyond Neptune holding icy "fossils" from 4.6 billion years ago — including Pluto itself.'
    },
    loginTag: {
        vi: 'Chào mừng trở lại',
        en: 'Welcome back'
    },
    loginTitle: {
        vi: 'Đăng nhập',
        en: 'Log In'
    },
    loginSub: {
        vi: 'Tiếp tục hành trình khám phá vũ trụ của bạn.',
        en: 'Continue your journey exploring the universe.'
    },
    fieldPassword: {
        vi: 'Mật khẩu',
        en: 'Password'
    },
    fieldConfirmPassword: {
        vi: 'Xác nhận mật khẩu',
        en: 'Confirm password'
    },
    loginPassPh: {
        vi: 'Nhập mật khẩu',
        en: 'Enter your password'
    },
    loginError: {
        vi: 'Email hoặc mật khẩu không đúng.',
        en: 'Incorrect email or password.'
    },
    loginSubmit: {
        vi: 'Đăng nhập',
        en: 'Log In'
    },
    loginMsg: {
        vi: 'Đăng nhập thành công! Đang chuyển hướng…',
        en: 'Login successful! Redirecting…'
    },
    loginNoAccount: {
        vi: 'Chưa có tài khoản?',
        en: "Don't have an account?"
    },
    loginRegisterNow: {
        vi: 'Đăng ký ngay',
        en: 'Sign up now'
    },
    loginForgot: {
        vi: 'Quên mật khẩu?',
        en: 'Forgot password?'
    },
    loginRemembered: {
        vi: 'Đã nhớ mật khẩu?',
        en: 'Remembered your password?'
    },
    regTag: {
        vi: 'Bắt đầu hành trình',
        en: 'Start your journey'
    },
    regTitle: {
        vi: 'Tạo tài khoản',
        en: 'Create Account'
    },
    regSub: {
        vi: 'Lưu lại các hành tinh yêu thích và tiếp tục khám phá.',
        en: 'Save your favorite planets and keep exploring.'
    },
    regEmailError: {
        vi: 'Email này đã được đăng ký.',
        en: 'This email is already registered.'
    },
    minChars: {
        vi: 'Tối thiểu 6 ký tự',
        en: 'At least 6 characters'
    },
    reenterPass: {
        vi: 'Nhập lại mật khẩu',
        en: 'Re-enter password'
    },
    mismatchError: {
        vi: 'Mật khẩu xác nhận không khớp.',
        en: 'Passwords do not match.'
    },
    regQuestionLabel: {
        vi: 'Câu hỏi bảo mật (dùng để khôi phục mật khẩu)',
        en: 'Security question (used to recover your password)'
    },
    qPet: {
        vi: 'Tên thú cưng đầu tiên của bạn?',
        en: 'What was the name of your first pet?'
    },
    qSchool: {
        vi: 'Trường tiểu học của bạn?',
        en: 'What was your elementary school?'
    },
    qCity: {
        vi: 'Thành phố bạn sinh ra?',
        en: 'What city were you born in?'
    },
    qPlanet: {
        vi: 'Hành tinh yêu thích của bạn?',
        en: 'What is your favorite planet?'
    },
    answerLabel: {
        vi: 'Câu trả lời',
        en: 'Answer'
    },
    answerPh: {
        vi: 'Câu trả lời của bạn',
        en: 'Your answer'
    },
    regSubmit: {
        vi: 'Tạo tài khoản',
        en: 'Create Account'
    },
    regMsg: {
        vi: 'Tạo tài khoản thành công! Đang chuyển hướng…',
        en: 'Account created! Redirecting…'
    },
    regHaveAccount: {
        vi: 'Đã có tài khoản?',
        en: 'Already have an account?'
    },
    forgotTag: {
        vi: 'Khôi phục truy cập',
        en: 'Recover access'
    },
    forgotTitle: {
        vi: 'Quên mật khẩu',
        en: 'Forgot Password'
    },
    forgotSub: {
        vi: 'Trả lời đúng câu hỏi bảo mật để đặt lại mật khẩu.',
        en: 'Answer your security question correctly to reset your password.'
    },
    forgotEmailError: {
        vi: 'Không tìm thấy tài khoản với email này.',
        en: 'No account found with this email.'
    },
    continueBtn: {
        vi: 'Tiếp tục',
        en: 'Continue'
    },
    forgotAnswerError: {
        vi: 'Câu trả lời chưa chính xác.',
        en: 'Incorrect answer.'
    },
    newPasswordLabel: {
        vi: 'Mật khẩu mới',
        en: 'New password'
    },
    confirmNewPasswordLabel: {
        vi: 'Xác nhận mật khẩu mới',
        en: 'Confirm new password'
    },
    reenterNewPass: {
        vi: 'Nhập lại mật khẩu mới',
        en: 'Re-enter new password'
    },
    resetSubmit: {
        vi: 'Đặt lại mật khẩu',
        en: 'Reset Password'
    },
    forgotMsg: {
        vi: 'Đặt lại mật khẩu thành công! Đang chuyển tới đăng nhập…',
        en: 'Password reset! Redirecting to login…'
    },
    acctTag: {
        vi: 'Tài khoản của bạn',
        en: 'Your account'
    },
    acctTitle: {
        vi: 'Trạm điều khiển cá nhân',
        en: 'Personal control station'
    },
    acctSub: {
        vi: 'Toàn bộ thông tin, tiến trình khám phá và bảo mật tài khoản của bạn.',
        en: 'All your information, exploration progress, and account security.'
    },
    acctJourney: {
        vi: 'Hành trình khám phá',
        en: 'Exploration journey'
    },
    acctEditProfile: {
        vi: 'Chỉnh sửa hồ sơ',
        en: 'Edit profile'
    },
    displayNameLabel: {
        vi: 'Tên hiển thị',
        en: 'Display name'
    },
    displayNamePh: {
        vi: 'Ví dụ: Nguyên Học IT',
        en: 'e.g. Nguyên Học IT'
    },
    favoritePlanetLabel: {
        vi: 'Hành tinh yêu thích',
        en: 'Favorite planet'
    },
    saveProfileBtn: {
        vi: 'Lưu hồ sơ',
        en: 'Save profile'
    },
    profileSavedMsg: {
        vi: 'Đã lưu thông tin hồ sơ!',
        en: 'Profile saved!'
    },
    acctSecurity: {
        vi: 'Bảo mật · Đổi mật khẩu',
        en: 'Security · Change password'
    },
    currentPasswordLabel: {
        vi: 'Mật khẩu hiện tại',
        en: 'Current password'
    },
    currentPasswordPh: {
        vi: 'Nhập mật khẩu hiện tại',
        en: 'Enter current password'
    },
    curPassError: {
        vi: 'Mật khẩu hiện tại không đúng.',
        en: 'Current password is incorrect.'
    },
    updatePasswordBtn: {
        vi: 'Cập nhật mật khẩu',
        en: 'Update password'
    },
    passwordChangedMsg: {
        vi: 'Đổi mật khẩu thành công!',
        en: 'Password changed successfully!'
    },
    acctLogoutLink: {
        vi: '← Đăng xuất khỏi tài khoản',
        en: '← Log out of account'
    },
    dangerZoneTitle: {
        vi: 'Vùng nguy hiểm',
        en: 'Danger zone'
    },
    dangerZoneDesc: {
        vi: 'Xoá tài khoản sẽ xoá vĩnh viễn thông tin đăng nhập và tiến trình khám phá đã lưu trên trình duyệt này. Hành động này không thể hoàn tác.',
        en: 'Deleting your account permanently removes your login info and exploration progress saved in this browser. This action cannot be undone.'
    },
    deleteAccountBtn: {
        vi: 'Xoá tài khoản',
        en: 'Delete account'
    },
    profileStageTag: {
        vi: 'Hành tinh của bạn',
        en: 'Your planet'
    },
    noFavoritePlanet: {
        vi: 'Chưa chọn hành tinh',
        en: 'No planet selected'
    },
    pickFavoriteHint: {
        vi: 'Chọn một hành tinh yêu thích bên dưới',
        en: 'Pick a favorite planet below'
    },
    planetOrderLine: {
        vi: 'Hành tinh thứ',
        en: 'Planet #'
    },
    noneSelected: {
        vi: '— Chưa chọn —',
        en: '— Not selected —'
    },
};

function T(key) {
    const entry = I18N[key];
    if (!entry) return key;
    return entry[currentLang] || entry.vi;
}

function tierLabel(count) {
    if (currentLang === 'en') {
        if (count >= 8) return 'Cosmic Master';
        if (count >= 5) return 'Interplanetary Explorer';
        if (count >= 1) return 'Space Rookie';
        return 'Journey not started';
    }
    if (count >= 8) return 'Bậc thầy vũ trụ';
    if (count >= 5) return 'Nhà thám hiểm liên hành tinh';
    if (count >= 1) return 'Tân binh không gian';
    return 'Chưa bắt đầu hành trình';
}

function applyStaticI18n() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (I18N[key]) el.innerHTML = T(key);
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.dataset.i18nPh;
        if (I18N[key]) el.placeholder = T(key);
    });
}

function applyLanguage(lang) {
    currentLang = (lang === 'en') ? 'en' : 'vi';
    localStorage.setItem('siteLang', currentLang);
    document.documentElement.lang = currentLang;
    document.getElementById('langBtnVi').classList.toggle('active', currentLang === 'vi');
    document.getElementById('langBtnEn').classList.toggle('active', currentLang === 'en');
    applyStaticI18n();
    // Re-render whatever dynamic content is currently visible so it
    // reflects the new language immediately.
    if (typeof renderList === 'function' && document.getElementById('planetList')) {
        renderList(null, document.getElementById('planetSearch') ? document.getElementById('planetSearch').value : '');
    }
    if (typeof detailCard !== 'undefined' && detailCard && detailCard.dataset && detailCard.dataset.key) {
        const p = PLANETS.find(pl => pl.key === detailCard.dataset.key);
        if (p) renderDetail(p, false);
    }
    if (typeof populateCompareSelects === 'function') populateCompareSelects();
    if (typeof compareMode !== 'undefined' && compareMode && typeof renderCompare === 'function') {
        renderCompare();
    }
    if (typeof lastPanelPlanet !== 'undefined' && lastPanelPlanet && document.getElementById('planetPanel') && document.getElementById('planetPanel').classList.contains('active')) {
        showPanel(lastPanelPlanet);
    }
    if (typeof updateFlyButton === 'function') {
        updateFlyButton();
    }
    if (typeof getSession === 'function' && getSession() && currentRoute === 'account' && typeof renderAccount === 'function') {
        renderAccount();
    }
    if (typeof quizOrder !== 'undefined' && quizOrder.length && quizIndex < quizOrder.length && typeof renderQuizQuestion === 'function') {
        renderQuizQuestion();
    } else if (document.getElementById('quizArea') && document.getElementById('quizStartBtn')) {
        document.getElementById('quizArea').innerHTML = quizIntroHTML();
        document.getElementById('quizStartBtn').addEventListener('click', startQuiz);
    }
}

const PLANETS = [{
    key: 'mercury',
    name: 'Sao Thủy',
    order: 1,
    color: 0x9e9a94,
    glow: 'rgba(158,154,148,0.5)',
    radius: 0.38,
    orbit: 9,
    speed: 0.048,
    desc: 'Hành tinh gần Mặt Trời nhất, gần như không có khí quyển nên nhiệt độ chênh lệch cực lớn giữa ngày và đêm.',
    size: '4.879 km',
    dist: '57,9 triệu km',
    moons: '0',
    day: '59 ngày Trái Đất',
    temp: '-173°C đến 427°C',
    atmo: 'Gần như chân không',
    fact: 'Một năm trên Sao Thủy chỉ dài 88 ngày Trái Đất, nhưng một ngày lại dài hơn cả năm đó.',
    en: {
        name: 'Mercury',
        desc: 'The closest planet to the Sun, with almost no atmosphere, causing extreme temperature swings between day and night.',
        dist: '57.9 million km',
        day: '59 Earth days',
        temp: '-173°C to 427°C',
        atmo: 'Near vacuum',
        fact: 'A year on Mercury lasts only 88 Earth days, yet a single day is longer than its year.'
    }
}, {
    key: 'venus',
    name: 'Sao Kim',
    order: 2,
    color: 0xe0b568,
    glow: 'rgba(224,181,104,0.55)',
    radius: 0.9,
    orbit: 13,
    speed: 0.035,
    desc: 'Hành tinh nóng nhất hệ Mặt Trời do hiệu ứng nhà kính từ lớp khí quyển dày đặc CO2.',
    size: '12.104 km',
    dist: '108,2 triệu km',
    moons: '0',
    day: '243 ngày Trái Đất',
    temp: '~464°C (ổn định)',
    atmo: '96% CO2, mây axit sulfuric',
    fact: 'Sao Kim quay ngược chiều so với hầu hết các hành tinh khác trong hệ Mặt Trời.',
    en: {
        name: 'Venus',
        desc: 'The hottest planet in the solar system due to a runaway greenhouse effect from its thick CO2 atmosphere.',
        dist: '108.2 million km',
        day: '243 Earth days',
        temp: '~464°C (stable)',
        atmo: '96% CO2, sulfuric acid clouds',
        fact: 'Venus rotates in the opposite direction to most other planets in the solar system.'
    }
}, {
    key: 'earth',
    name: 'Trái Đất',
    order: 3,
    color: 0x3f7dd6,
    glow: 'rgba(63,125,214,0.6)',
    radius: 0.95,
    orbit: 17,
    speed: 0.03,
    desc: 'Hành tinh duy nhất được biết đến có sự sống, với 71% bề mặt được bao phủ bởi nước lỏng.',
    size: '12.742 km',
    dist: '149,6 triệu km',
    moons: '1',
    day: '24 giờ',
    temp: '-88°C đến 58°C',
    atmo: '78% nitơ, 21% oxy',
    fact: 'Trái Đất là hành tinh duy nhất không được đặt tên theo một vị thần Hy Lạp hay La Mã.',
    en: {
        name: 'Earth',
        desc: 'The only known planet with life, with 71% of its surface covered by liquid water.',
        dist: '149.6 million km',
        day: '24 hours',
        temp: '-88°C to 58°C',
        atmo: '78% nitrogen, 21% oxygen',
        fact: 'Earth is the only planet not named after a Greek or Roman god.'
    }
}, {
    key: 'mars',
    name: 'Sao Hỏa',
    order: 4,
    color: 0xc1553a,
    glow: 'rgba(193,85,58,0.55)',
    radius: 0.55,
    orbit: 22,
    speed: 0.024,
    desc: 'Được gọi là "hành tinh đỏ", nơi có Olympus Mons — ngọn núi lửa lớn nhất hệ Mặt Trời.',
    size: '6.779 km',
    dist: '227,9 triệu km',
    moons: '2',
    day: '24,6 giờ',
    temp: '-153°C đến 20°C',
    atmo: '95% CO2, rất loãng',
    fact: 'Olympus Mons trên Sao Hỏa cao gấp gần 3 lần đỉnh Everest.',
    en: {
        name: 'Mars',
        desc: 'Known as the "red planet", home to Olympus Mons — the largest volcano in the solar system.',
        dist: '227.9 million km',
        day: '24.6 hours',
        temp: '-153°C to 20°C',
        atmo: '95% CO2, very thin',
        fact: 'Olympus Mons on Mars is nearly 3 times taller than Mount Everest.'
    }
}, {
    key: 'jupiter',
    name: 'Sao Mộc',
    order: 5,
    color: 0xd8a273,
    glow: 'rgba(216,162,115,0.55)',
    radius: 2.0,
    orbit: 31,
    speed: 0.013,
    desc: 'Hành tinh lớn nhất hệ Mặt Trời, nổi bật với Vết Đỏ Lớn — một cơn bão khổng lồ tồn tại hàng trăm năm.',
    size: '139.820 km',
    dist: '778,5 triệu km',
    moons: '95',
    day: '10 giờ',
    temp: '~-108°C (đỉnh mây)',
    atmo: 'Hydro và heli',
    fact: 'Vết Đỏ Lớn của Sao Mộc lớn hơn cả đường kính Trái Đất.',
    en: {
        name: 'Jupiter',
        desc: 'The largest planet in the solar system, famous for the Great Red Spot — a giant storm that has raged for centuries.',
        dist: '778.5 million km',
        day: '10 hours',
        temp: '~-108°C (cloud top)',
        atmo: 'Hydrogen and helium',
        fact: "Jupiter's Great Red Spot is larger than the diameter of Earth."
    }
}, {
    key: 'saturn',
    name: 'Sao Thổ',
    order: 6,
    color: 0xe3caa0,
    glow: 'rgba(227,202,160,0.55)',
    radius: 1.7,
    orbit: 40,
    speed: 0.0097,
    hasRing: true,
    desc: 'Nổi tiếng với hệ vành đai băng đá rộng lớn, được tạo thành từ hàng tỷ mảnh băng và đá.',
    size: '116.460 km',
    dist: '1,43 tỷ km',
    moons: '146',
    day: '10,7 giờ',
    temp: '~-139°C (đỉnh mây)',
    atmo: 'Hydro và heli',
    fact: 'Sao Thổ có mật độ thấp đến mức về lý thuyết nó có thể nổi trên mặt nước.',
    en: {
        name: 'Saturn',
        desc: 'Famous for its vast system of icy rings, made up of billions of pieces of ice and rock.',
        dist: '1.43 billion km',
        day: '10.7 hours',
        temp: '~-139°C (cloud top)',
        atmo: 'Hydrogen and helium',
        fact: "Saturn's density is so low that it could theoretically float on water."
    }
}, {
    key: 'uranus',
    name: 'Sao Thiên Vương',
    order: 7,
    color: 0x9fd6d6,
    glow: 'rgba(159,214,214,0.55)',
    radius: 1.2,
    orbit: 48,
    speed: 0.0068,
    desc: 'Có trục quay gần như nằm ngang, khiến hành tinh này "lăn" quanh Mặt Trời thay vì quay như con quay.',
    size: '50.724 km',
    dist: '2,87 tỷ km',
    moons: '27',
    day: '17 giờ',
    temp: '~-197°C (đỉnh mây)',
    atmo: 'Hydro, heli, metan',
    fact: 'Màu xanh lam nhạt của Sao Thiên Vương đến từ khí metan hấp thụ ánh sáng đỏ.',
    en: {
        name: 'Uranus',
        desc: 'Its axis is tilted almost sideways, making the planet "roll" around the Sun instead of spinning upright.',
        dist: '2.87 billion km',
        day: '17 hours',
        temp: '~-197°C (cloud top)',
        atmo: 'Hydrogen, helium, methane',
        fact: "Uranus's pale blue color comes from methane gas absorbing red light."
    }
}, {
    key: 'neptune',
    name: 'Sao Hải Vương',
    order: 8,
    color: 0x4d6ee0,
    glow: 'rgba(77,110,224,0.55)',
    radius: 1.15,
    orbit: 55,
    speed: 0.0054,
    desc: 'Hành tinh xa Mặt Trời nhất, sở hữu những cơn gió mạnh nhất hệ Mặt Trời, có thể lên tới 2.100 km/h.',
    size: '49.244 km',
    dist: '4,50 tỷ km',
    moons: '16',
    day: '16 giờ',
    temp: '~-201°C (đỉnh mây)',
    atmo: 'Hydro, heli, metan',
    fact: 'Sao Hải Vương phải mất 165 năm Trái Đất để hoàn thành một vòng quanh Mặt Trời.',
    en: {
        name: 'Neptune',
        desc: 'The farthest planet from the Sun, home to the strongest winds in the solar system, reaching up to 2,100 km/h.',
        dist: '4.50 billion km',
        day: '16 hours',
        temp: '~-201°C (cloud top)',
        atmo: 'Hydrogen, helium, methane',
        fact: 'Neptune takes 165 Earth years to complete one orbit around the Sun.'
    }
}, ];

/* ---------------- i18n HELPERS ---------------- */
function planetField(p, field) {
    if (currentLang === 'en' && p.en && p.en[field] !== undefined) return p.en[field];
    return p[field];
}

/* ---------------- GRAVITY (relative to Earth = 1) ---------------- */
const GRAVITY = {
    mercury: 0.38,
    venus: 0.91,
    earth: 1,
    mars: 0.38,
    jupiter: 2.53,
    saturn: 1.07,
    uranus: 0.9,
    neptune: 1.14
};

/* ---------------- HERO "DID YOU KNOW" FACT ROTATOR ---------------- */
(function heroFactRotator() {
    const el = document.getElementById('heroFact');
    const textEl = document.getElementById('heroFactText');
    if (!el || !textEl) return;
    let idx = Math.floor(Math.random() * PLANETS.length);

    function showNext() {
        el.classList.remove('show');
        setTimeout(() => {
            idx = (idx + 1) % PLANETS.length;
            textEl.textContent = planetField(PLANETS[idx], 'fact');
            el.classList.add('show');
        }, 500);
    }
    textEl.textContent = planetField(PLANETS[idx], 'fact');
    requestAnimationFrame(() => el.classList.add('show'));
    setInterval(showNext, 7000);
})();

/* ---------------- PROCEDURAL PLANET TEXTURES ---------------- */
/* Each planet gets a real equirectangular texture drawn on a canvas —
   continents/oceans for Earth, storm bands for gas giants, craters for
   rocky worlds — instead of a flat solid color. Used both for the 3D
   globes in the Three.js scene and for the spinning thumbnails on the
   planet info page. */
function mulberry32(seed) {
    return function() {
        seed |= 0;
        seed = seed + 0x6D2B79F5 | 0;
        let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}

function drawCratered(ctx, w, h, base, seedNum, polar) {
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, w, h);
    const rand = mulberry32(seedNum);
    for (let i = 0; i < 150; i++) {
        const x = rand() * w,
            y = h * 0.12 + rand() * h * 0.76,
            r = 2 + rand() * 9;
        ctx.beginPath();
        ctx.fillStyle = `rgba(0,0,0,${0.08+rand()*0.2})`;
        ctx.ellipse(x, y, r, r * 0.65, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255,255,255,${0.05+rand()*0.1})`;
        ctx.ellipse(x - r * 0.3, y - r * 0.25, r * 0.75, r * 0.5, 0, 0, Math.PI * 2);
        ctx.stroke();
    }
    if (polar) addIceCaps(ctx, w, h, 0.85);
}

function addIceCaps(ctx, w, h, strength) {
    let g = ctx.createLinearGradient(0, 0, 0, h * 0.14);
    g.addColorStop(0, `rgba(255,255,255,${strength})`);
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h * 0.14);
    g = ctx.createLinearGradient(0, h * 0.86, 0, h);
    g.addColorStop(0, 'rgba(255,255,255,0)');
    g.addColorStop(1, `rgba(255,255,255,${strength})`);
    ctx.fillStyle = g;
    ctx.fillRect(0, h * 0.86, w, h * 0.14);
}

function drawEarth(ctx, w, h) {
    const ocean = ctx.createLinearGradient(0, 0, 0, h);
    ocean.addColorStop(0, '#173a63');
    ocean.addColorStop(0.5, '#2c6bb0');
    ocean.addColorStop(1, '#173a63');
    ctx.fillStyle = ocean;
    ctx.fillRect(0, 0, w, h);

    const rand = mulberry32(42);

    function blob(cx, cy, size, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        const pts = 10 + Math.floor(rand() * 6);
        for (let i = 0; i <= pts; i++) {
            const ang = (i / pts) * Math.PI * 2;
            const rr = size * (0.6 + rand() * 0.6);
            const x = cx + Math.cos(ang) * rr,
                y = cy + Math.sin(ang) * rr * 0.6;
            i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
    }
    const continents = [{
        x: 0.14,
        y: 0.32,
        s: 0.085,
        c: '#3f8f4f'
    }, {
        x: 0.20,
        y: 0.60,
        s: 0.06,
        c: '#4a9a55'
    }, {
        x: 0.47,
        y: 0.28,
        s: 0.075,
        c: '#7a9c4a'
    }, {
        x: 0.60,
        y: 0.50,
        s: 0.11,
        c: '#8ba24f'
    }, {
        x: 0.50,
        y: 0.62,
        s: 0.055,
        c: '#5a9a4a'
    }, {
        x: 0.76,
        y: 0.72,
        s: 0.045,
        c: '#6a9a4a'
    }, ];
    continents.forEach(cnt => {
        [-1, 0, 1].forEach(off => blob((cnt.x + off) * w, cnt.y * h, cnt.s * w, cnt.c));
    });
    ctx.globalAlpha = 0.22;
    for (let i = 0; i < 24; i++) {
        const x = rand() * w,
            y = h * 0.12 + rand() * h * 0.7,
            r = 10 + rand() * 28;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.ellipse(x, y, r, r * 0.4, 0, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.globalAlpha = 1;
    addIceCaps(ctx, w, h, 0.9);
}

function drawBands(ctx, w, h, colors, spot) {
    const rand = mulberry32(7);
    let y = 0,
        i = 0;
    const baseH = h / (colors.length * 2.6);
    while (y < h) {
        const bh = baseH * (0.6 + rand() * 0.9);
        ctx.fillStyle = colors[i % colors.length];
        ctx.fillRect(0, y, w, bh);
        y += bh;
        i++;
    }
    ctx.globalAlpha = 0.1;
    for (let j = 0; j < 70; j++) {
        const yy = rand() * h;
        ctx.fillStyle = j % 2 ? '#ffffff' : '#000000';
        ctx.fillRect(0, yy, w, 1 + rand() * 2);
    }
    ctx.globalAlpha = 1;
    if (spot) {
        ctx.fillStyle = 'rgba(180,70,55,0.6)';
        ctx.beginPath();
        ctx.ellipse(w * 0.63, h * 0.58, w * 0.085, h * 0.065, 0, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawSwirl(ctx, w, h, c1, c2) {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, c1);
    g.addColorStop(0.5, c2);
    g.addColorStop(1, c1);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    const rand = mulberry32(3);
    ctx.globalAlpha = 0.16;
    for (let i = 0; i < 9; i++) {
        const y = rand() * h;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 4 + rand() * 8;
        ctx.beginPath();
        ctx.moveTo(0, y);
        for (let x = 0; x <= w; x += 32) ctx.lineTo(x, y + Math.sin(x * 0.03 + i) * 10);
        ctx.stroke();
    }
    ctx.globalAlpha = 1;
}

function drawFlatBands(ctx, w, h, c1, c2) {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, c1);
    g.addColorStop(0.5, c2);
    g.addColorStop(1, c1);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    const rand = mulberry32(11);
    ctx.globalAlpha = 0.08;
    for (let j = 0; j < 20; j++) {
        const yy = rand() * h;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, yy, w, 2 + rand() * 3);
    }
    ctx.globalAlpha = 1;
}

function createPlanetCanvas(key) {
    const w = 512,
        h = 256;
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    const ctx = c.getContext('2d');
    switch (key) {
        case 'mercury':
            drawCratered(ctx, w, h, '#8f8a86', 1, false);
            break;
        case 'venus':
            drawSwirl(ctx, w, h, '#e7c67a', '#c99a4a');
            break;
        case 'earth':
            drawEarth(ctx, w, h);
            break;
        case 'mars':
            drawCratered(ctx, w, h, '#c1553a', 5, true);
            break;
        case 'jupiter':
            drawBands(ctx, w, h, ['#d8a273', '#b97b4a', '#e8c9a0', '#a5673c'], true);
            break;
        case 'saturn':
            drawBands(ctx, w, h, ['#e3caa0', '#cdb383', '#f0ddb8'], false);
            break;
        case 'uranus':
            drawFlatBands(ctx, w, h, '#bdeaea', '#8fd0d0');
            break;
        case 'neptune':
            drawBands(ctx, w, h, ['#4d6ee0', '#3a56c0', '#6b8af0'], true);
            break;
        default:
            ctx.fillStyle = '#888';
            ctx.fillRect(0, 0, w, h);
    }
    return c;
}

const PLANET_CANVAS = {};
PLANETS.forEach(p => {
    PLANET_CANVAS[p.key] = createPlanetCanvas(p.key);
});

/* ---------------- ROUTER ---------------- */
const pages = ['banner', 'solar', 'planets', 'login', 'register', 'account', 'quiz', 'forgot'];
let currentRoute = null;
let solarStarted = false;

function setActiveNav(route) {
    document.querySelectorAll('.nav-links a[data-route]').forEach(a => {
        a.classList.toggle('active', a.dataset.route === route);
    });
}

function showPage(route, {
    warp = true
} = {}) {
    if (!pages.includes(route)) route = 'banner';
    if (route === 'account' && !getSession()) route = 'login';
    if (route === currentRoute) return;
    const overlay = document.getElementById('warp-overlay');
    const doSwitch = () => {
        document.querySelectorAll('.page').forEach(p => {
            p.classList.remove('visible', 'enter');
        });
        const next = document.getElementById('page-' + route);
        next.classList.add('visible');
        void next.offsetWidth;
        next.classList.add('enter');
        currentRoute = route;
        setActiveNav(route);
        window.scrollTo(0, 0);
        if (route === 'solar' && !solarStarted) {
            solarStarted = true;
            initSolar();
        }
        if (route === 'solar' && solarStarted) {
            resizeSolar();
        }
        if (route === 'account') {
            renderAccount();
        }
    };
    if (warp) {
        overlay.classList.remove('flash');
        void overlay.offsetWidth;
        overlay.classList.add('flash');
        setTimeout(doSwitch, 230);
        setTimeout(() => overlay.classList.remove('flash'), 700);
    } else {
        doSwitch();
    }
}

document.addEventListener('click', e => {
    const el = e.target.closest('[data-route]');
    if (!el) return;
    e.preventDefault();
    showPage(el.dataset.route);
});

/* ---------------- PLANETS INFO PAGE ---------------- */
const planetList = document.getElementById('planetList');
const detailCard = document.getElementById('detailCard');

function renderDetail(p, doMark = true) {
    const texURL = PLANET_CANVAS[p.key].toDataURL();
    detailCard.dataset.key = p.key;
    detailCard.innerHTML = `
    <div class="detail-orb-wrap">
      <div class="detail-orb" style="--orb-glow:${p.glow}; background-image:url(${texURL});"></div>
    </div>
    <div>
      <div class="detail-order">${T('planetOrderLine')} ${p.order}</div>
      <h3>${planetField(p,'name')}</h3>
      <div class="desc">${planetField(p,'desc')}</div>
      <div class="detail-grid">
        <div><div class="label">${T('statDiameter')}</div><div class="value">${p.size}</div></div>
        <div><div class="label">${T('statDistance')}</div><div class="value">${planetField(p,'dist')}</div></div>
        <div><div class="label">${T('statMoons')}</div><div class="value">${p.moons}</div></div>
        <div><div class="label">${T('statDay')}</div><div class="value">${planetField(p,'day')}</div></div>
        <div><div class="label">${T('statTemp')}</div><div class="value">${planetField(p,'temp')}</div></div>
        <div><div class="label">${currentLang==='en'?'Atmosphere':'Khí quyển'}</div><div class="value">${planetField(p,'atmo')}</div></div>
      </div>
      <div class="fact-line">${planetField(p,'fact')}</div>
      <div class="weight-calc">
        <label for="weightInput">${T('weightLabel')}</label>
        <input type="number" id="weightInput" min="1" max="1000" value="60">
        <div class="weight-result" id="weightResult"></div>
      </div>
    </div>
  `;
    if (doMark) markExplored(p.key);
    const wInput = detailCard.querySelector('#weightInput');
    const wResult = detailCard.querySelector('#weightResult');
    if (wInput && wResult) {
        const updateWeight = () => {
            const kg = parseFloat(wInput.value) || 0;
            const g = GRAVITY[p.key] !== undefined ? GRAVITY[p.key] : 1;
            wResult.textContent = `${(kg * g).toFixed(1)} kg ${T('weightOn')} ${planetField(p,'name')}`;
        };
        wInput.addEventListener('input', updateWeight);
        updateWeight();
    }
}

function getFavorites() {
    const key = getSession() ? ('galaxy_favorites_' + getSession()) : 'galaxy_favorites_guest';
    try {
        return JSON.parse(localStorage.getItem(key) || '[]');
    } catch (e) {
        return [];
    }
}

function toggleFavorite(planetKey) {
    const key = getSession() ? ('galaxy_favorites_' + getSession()) : 'galaxy_favorites_guest';
    const favs = getFavorites();
    const idx = favs.indexOf(planetKey);
    if (idx === -1) favs.push(planetKey);
    else favs.splice(idx, 1);
    localStorage.setItem(key, JSON.stringify(favs));
}

function renderList(activeKey, filterText) {
    planetList.innerHTML = '';
    const favs = getFavorites();
    const term = (filterText || '').trim().toLowerCase();
    const filtered = PLANETS.filter(p => !term || planetField(p, 'name').toLowerCase().includes(term) || p.name.toLowerCase().includes(term));
    if (filtered.length === 0) {
        planetList.innerHTML = `<div style="color:var(--text-dust);font-size:13px;padding:12px;">${T('notFoundPlanet')}</div>`;
        return;
    }
    const activeK = activeKey || (detailCard.dataset ? detailCard.dataset.key : null);
    filtered.forEach(p => {
        const hex = '#' + p.color.toString(16).padStart(6, '0');
        const isFav = favs.includes(p.key);
        const btn = document.createElement('button');
        btn.className = p.key === activeK ? 'active' : '';
        btn.style.justifyContent = 'space-between';
        btn.style.display = 'flex';
        btn.innerHTML = `<span style="display:flex;align-items:center;gap:12px;"><span class="dot" style="background:${hex};"></span>${planetField(p,'name')}</span><span class="fav-star" data-key="${p.key}" style="cursor:pointer;color:${isFav?'var(--accent-solar)':'var(--ov-25)'};">★</span>`;
        btn.addEventListener('click', (e) => {
            if (e.target.classList.contains('fav-star')) return;
            renderList(p.key, document.getElementById('planetSearch').value);
            renderDetail(p);
        });
        planetList.appendChild(btn);
    });
    planetList.querySelectorAll('.fav-star').forEach(star => {
        star.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(star.dataset.key);
            renderList(activeKey, document.getElementById('planetSearch').value);
        });
    });
}
renderList('earth');
renderDetail(PLANETS.find(p => p.key === 'earth'));

document.getElementById('planetSearch').addEventListener('input', e => {
    renderList(null, e.target.value);
});

function lighten(hex) {
    const num = parseInt(hex.slice(1), 16);
    let r = (num >> 16) + 70,
        g = ((num >> 8) & 0xff) + 70,
        b = (num & 0xff) + 70;
    r = Math.min(255, r);
    g = Math.min(255, g);
    b = Math.min(255, b);
    return `rgb(${r},${g},${b})`;
}

/* ---------------- COMPARE MODE ---------------- */
const compareToggleBtn = document.getElementById('compareToggle');
const normalView = document.getElementById('normalView');
const compareView = document.getElementById('compareView');
const compareA = document.getElementById('compareA');
const compareB = document.getElementById('compareB');
let compareMode = false;

function populateCompareSelects() {
    [compareA, compareB].forEach((sel, i) => {
        const prev = sel.value;
        sel.innerHTML = PLANETS.map(p => `<option value="${p.key}">${planetField(p,'name')}</option>`).join('');
        sel.value = prev || PLANETS[i === 0 ? 2 : 4].key;
    });
}
populateCompareSelects();

function renderCompareCard(p) {
    const texURL = PLANET_CANVAS[p.key].toDataURL();
    return `
    <div class="detail-card" style="grid-template-columns:1fr;text-align:center;">
      <div class="detail-orb-wrap">
        <div class="detail-orb" style="width:110px;height:110px;--orb-glow:${p.glow};background-image:url(${texURL});"></div>
      </div>
      <div>
        <div class="detail-order">${T('planetOrderLine')} ${p.order}</div>
        <h3 style="font-size:22px;">${planetField(p,'name')}</h3>
        <div class="detail-grid" style="text-align:left;">
          <div><div class="label">${T('statDiameter')}</div><div class="value">${p.size}</div></div>
          <div><div class="label">${currentLang==='en'?'Distance':'Khoảng cách'}</div><div class="value">${planetField(p,'dist')}</div></div>
          <div><div class="label">${T('statMoons')}</div><div class="value">${p.moons}</div></div>
          <div><div class="label">${currentLang==='en'?'Day length':'Một ngày'}</div><div class="value">${planetField(p,'day')}</div></div>
          <div><div class="label">${T('statTemp')}</div><div class="value">${planetField(p,'temp')}</div></div>
          <div><div class="label">${currentLang==='en'?'Atmosphere':'Khí quyển'}</div><div class="value">${planetField(p,'atmo')}</div></div>
        </div>
      </div>
    </div>
  `;
}

function renderCompare() {
    const pA = PLANETS.find(p => p.key === compareA.value);
    const pB = PLANETS.find(p => p.key === compareB.value);
    document.getElementById('compareGrid').innerHTML = renderCompareCard(pA) + renderCompareCard(pB);
    markExplored(pA.key);
    markExplored(pB.key);
}
compareA.addEventListener('change', renderCompare);
compareB.addEventListener('change', renderCompare);

compareToggleBtn.addEventListener('click', () => {
    compareMode = !compareMode;
    normalView.style.display = compareMode ? 'none' : 'contents';
    compareView.style.display = compareMode ? 'block' : 'none';
    compareToggleBtn.textContent = compareMode ? T('compareBackBtn') : T('compareBtn');
    if (compareMode) renderCompare();
});

/* ---------------- REAL AUTH (client-side, per browser) ---------------- */
/* Passwords are never stored in plain text: each account gets a random
   salt, and SHA-256(salt + ':' + password) is what gets saved. Accounts
   live in this browser's localStorage — there is no shared server, so
   the same account will not show up on a different device or browser. */

function randomSalt() {
    return Array.from(crypto.getRandomValues(new Uint8Array(16))).map(b => b.toString(16).padStart(2, '0')).join('');
}
async function hashPassword(password, salt) {
    const enc = new TextEncoder();
    const data = enc.encode(salt + ':' + password);
    const buf = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function getUsers() {
    try {
        return JSON.parse(localStorage.getItem('galaxy_users') || '{}');
    } catch (e) {
        return {};
    }
}

function saveUsers(u) {
    localStorage.setItem('galaxy_users', JSON.stringify(u));
}

function getSession() {
    return localStorage.getItem('galaxy_session');
}

function setSession(email) {
    localStorage.setItem('galaxy_session', email);
    updateNavAuth();
}

function clearSession() {
    localStorage.removeItem('galaxy_session');
    updateNavAuth();
}

function updateNavAuth() {
    const session = getSession();
    const loginItem = document.getElementById('navLoginItem');
    const registerItem = document.getElementById('navRegisterItem');
    const userItem = document.getElementById('navUserItem');
    if (session) {
        loginItem.style.display = 'none';
        registerItem.style.display = 'none';
        userItem.style.display = 'flex';
        const rec = getUsers()[session] || {};
        document.getElementById('navUserEmail').textContent = rec.displayName || session;
    } else {
        loginItem.style.display = '';
        registerItem.style.display = '';
        userItem.style.display = 'none';
    }
}
document.getElementById('navLogoutBtn').addEventListener('click', () => {
    clearSession();
    showPage('solar');
});

document.getElementById('loginForm').addEventListener('submit', async e => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim().toLowerCase();
    const pass = document.getElementById('loginPass').value;
    const errBox = document.getElementById('loginError');
    const msgBox = document.getElementById('loginMsg');
    errBox.classList.remove('show');
    msgBox.classList.remove('show');

    const users = getUsers();
    const rec = users[email];
    if (!rec) {
        errBox.classList.add('show');
        return;
    }
    const hash = await hashPassword(pass, rec.salt);
    if (hash !== rec.hash) {
        errBox.classList.add('show');
        return;
    }

    setSession(email);
    msgBox.classList.add('show');
    setTimeout(() => showPage('planets'), 700);
});

document.getElementById('registerForm').addEventListener('submit', async e => {
    e.preventDefault();
    const email = document.getElementById('regEmail').value.trim().toLowerCase();
    const p1 = document.getElementById('regPass').value;
    const p2 = document.getElementById('regPass2').value;
    const mismatchErr = document.getElementById('regError');
    const emailErr = document.getElementById('regEmailError');
    const msgBox = document.getElementById('regMsg');
    mismatchErr.classList.remove('show');
    emailErr.classList.remove('show');
    msgBox.classList.remove('show');

    if (p1 !== p2) {
        mismatchErr.classList.add('show');
        return;
    }

    const users = getUsers();
    if (users[email]) {
        emailErr.classList.add('show');
        return;
    }

    const question = document.getElementById('regQuestion').value;
    const answerRaw = document.getElementById('regAnswer').value.trim().toLowerCase();
    const answerSalt = randomSalt();
    const answerHash = await hashPassword(answerRaw, answerSalt);

    const salt = randomSalt();
    const hash = await hashPassword(p1, salt);
    users[email] = {
        salt,
        hash,
        createdAt: Date.now(),
        question,
        answerSalt,
        answerHash,
        displayName: ''
    };
    saveUsers(users);

    setSession(email);
    msgBox.classList.add('show');
    setTimeout(() => showPage('planets'), 700);
});

updateNavAuth();

/* ---------------- FORGOT PASSWORD ---------------- */
const QUESTION_LABELS = {
    pet: 'Tên thú cưng đầu tiên của bạn?',
    school: 'Trường tiểu học của bạn?',
    city: 'Thành phố bạn sinh ra?',
    planet: 'Hành tinh yêu thích của bạn?'
};
let forgotEmailTarget = null;

document.getElementById('forgotStep1').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('forgotEmail').value.trim().toLowerCase();
    const err = document.getElementById('forgotEmailError');
    err.classList.remove('show');
    const users = getUsers();
    const rec = users[email];
    if (!rec) {
        err.classList.add('show');
        return;
    }
    forgotEmailTarget = email;
    document.getElementById('forgotQuestionLabel').textContent = QUESTION_LABELS[rec.question] || 'Câu hỏi bảo mật của bạn';
    document.getElementById('forgotStep1').style.display = 'none';
    document.getElementById('forgotStep2').style.display = 'block';
});

document.getElementById('forgotStep2').addEventListener('submit', async e => {
    e.preventDefault();
    const users = getUsers();
    const rec = users[forgotEmailTarget];
    const answer = document.getElementById('forgotAnswer').value.trim().toLowerCase();
    const p1 = document.getElementById('forgotNewPass').value;
    const p2 = document.getElementById('forgotNewPass2').value;
    const ansErr = document.getElementById('forgotAnswerError');
    const mismatchErr = document.getElementById('forgotMismatchError');
    const msg = document.getElementById('forgotMsg');
    ansErr.classList.remove('show');
    mismatchErr.classList.remove('show');
    msg.classList.remove('show');

    const answerHash = await hashPassword(answer, rec.answerSalt);
    if (answerHash !== rec.answerHash) {
        ansErr.classList.add('show');
        return;
    }
    if (p1 !== p2) {
        mismatchErr.classList.add('show');
        return;
    }

    const newSalt = randomSalt();
    const newHash = await hashPassword(p1, newSalt);
    users[forgotEmailTarget] = {...rec,
        salt: newSalt,
        hash: newHash
    };
    saveUsers(users);
    msg.classList.add('show');
    setTimeout(() => {
        document.getElementById('forgotStep1').reset();
        document.getElementById('forgotStep2').reset();
        document.getElementById('forgotStep1').style.display = 'block';
        document.getElementById('forgotStep2').style.display = 'none';
        showPage('login');
    }, 900);
});

function getExplored(email) {
    if (!email) return [];
    try {
        return JSON.parse(localStorage.getItem('galaxy_explored_' + email) || '[]');
    } catch (e) {
        return [];
    }
}

function markExplored(key) {
    const email = getSession();
    if (!email) return;
    const arr = getExplored(email);
    if (!arr.includes(key)) {
        arr.push(key);
        localStorage.setItem('galaxy_explored_' + email, JSON.stringify(arr));
    }
}

function renderAccount() {
    const email = getSession();
    if (!email) return;
    const users = getUsers();
    const rec = users[email] || {};
    const displayName = rec.displayName || '';
    document.getElementById('acctAvatar').textContent = (displayName || email).slice(0, 2).toUpperCase();
    document.getElementById('acctEmail').textContent = displayName ? (displayName + ' · ' + email) : email;
    const created = rec.createdAt ? new Date(rec.createdAt) : null;
    document.getElementById('acctCreated').textContent = created ?
        (currentLang === 'en' ? 'Joined ' + created.toLocaleDateString('en-US') : 'Tham gia ngày ' + created.toLocaleDateString('vi-VN')) :
        '';

    document.getElementById('profileName').value = displayName;
    const planetSelect = document.getElementById('profilePlanet');
    planetSelect.innerHTML = `<option value="">${T('noneSelected')}</option>` +
        PLANETS.map(p => `<option value="${p.key}">${planetField(p,'name')}</option>`).join('');
    planetSelect.value = rec.favoritePlanet || '';
    document.getElementById('profileMsg').classList.remove('show');

    const explored = getExplored(email);
    const count = explored.length;
    document.getElementById('exploreCountText').textContent = count + '/' + PLANETS.length + ' ' + (currentLang === 'en' ? 'planets' : 'hành tinh');
    document.getElementById('exploreTierText').textContent = tierLabel(count);
    document.getElementById('acctTier').textContent = tierLabel(count);
    document.getElementById('exploreFill').style.width = Math.round((count / PLANETS.length) * 100) + '%';

    const dotsEl = document.getElementById('exploreDots');
    dotsEl.innerHTML = '';
    PLANETS.forEach(p => {
        const has = explored.includes(p.key);
        const hex = '#' + p.color.toString(16).padStart(6, '0');
        const dot = document.createElement('div');
        dot.className = 'explore-dot';
        dot.title = planetField(p, 'name') + (has ? (currentLang === 'en' ? ' · explored' : ' · đã khám phá') : (currentLang === 'en' ? ' · unexplored' : ' · chưa khám phá'));
        dot.style.background = has ? hex : 'var(--ov-08)';
        dot.style.border = '1px solid ' + (has ? hex : 'var(--ov-2)');
        dot.style.boxShadow = has ? ('0 0 10px ' + hex) : 'none';
        dot.addEventListener('click', () => {
            showPage('planets');
            renderList(p.key);
            renderDetail(p);
        });
        dotsEl.appendChild(dot);
    });

    document.getElementById('changePassForm').reset();
    ['curPassError', 'newPassError', 'changePassMsg'].forEach(id => {
        document.getElementById(id).classList.remove('show');
    });

    renderProfileStage(rec.favoritePlanet || '', count);
}

document.getElementById('profilePlanet').addEventListener('change', e => {
    const email = getSession();
    const users = getUsers();
    const rec = (email && users[email]) || {};
    const explored = email ? getExplored(email) : [];
    renderProfileStage(e.target.value, explored.length);
});

/* ---------------- PROFILE 3D SHOWCASE (game-style) ---------------- */
let profileRenderer, profileScene, profileCamera, profileMesh, profileLightsCount = 0;

function initProfileStage() {
    const canvas = document.getElementById('profileCanvas');
    if (!canvas || profileRenderer) return;
    profileRenderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true
    });
    profileRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    profileScene = new THREE.Scene();
    profileCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    profileCamera.position.set(0, 0, 4.2);
    profileScene.add(new THREE.AmbientLight(0x554488, 0.75));
    const light = new THREE.PointLight(0xffdca0, 2.2, 100);
    light.position.set(4, 3, 5);
    profileScene.add(light);
    profileLightsCount = profileScene.children.length;
    resizeProfileStage();
    animateProfileStage();
}

function resizeProfileStage() {
    const canvas = document.getElementById('profileCanvas');
    if (!canvas || !profileRenderer) return;
    const size = Math.round(canvas.parentElement.clientWidth) || 210;
    profileRenderer.setSize(size, size, false);
    profileCamera.aspect = 1;
    profileCamera.updateProjectionMatrix();
}
window.addEventListener('resize', () => {
    if (profileRenderer) resizeProfileStage();
});

function renderProfileStage(key, exploredCount) {
    initProfileStage();
    const nameEl = document.getElementById('profileStageName');
    const orderEl = document.getElementById('profileStageOrder');
    const badgeEl = document.getElementById('profileLevelBadge');
    const sizeEl = document.getElementById('profileStatSize');
    const moonsEl = document.getElementById('profileStatMoons');
    const tempEl = document.getElementById('profileStatTemp');
    const dayEl = document.getElementById('profileStatDay');
    if (!nameEl || !profileScene) return;

    while (profileScene.children.length > profileLightsCount) {
        profileScene.remove(profileScene.children[profileLightsCount]);
    }
    profileMesh = null;

    const p = PLANETS.find(pl => pl.key === key);
    badgeEl.textContent = tierLabel(exploredCount || 0);
    if (!p) {
        nameEl.textContent = T('noFavoritePlanet');
        orderEl.textContent = T('pickFavoriteHint');
        sizeEl.textContent = '—';
        moonsEl.textContent = '—';
        tempEl.textContent = '—';
        dayEl.textContent = '—';
        return;
    }
    nameEl.textContent = planetField(p, 'name');
    orderEl.textContent = T('planetOrderLine') + ' ' + p.order;
    sizeEl.textContent = p.size;
    moonsEl.textContent = p.moons;
    tempEl.textContent = planetField(p, 'temp');
    dayEl.textContent = planetField(p, 'day');

    const tex = new THREE.CanvasTexture(PLANET_CANVAS[p.key]);
    const mat = new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.9,
        metalness: 0.05
    });
    profileMesh = new THREE.Mesh(new THREE.SphereGeometry(1.5, 48, 48), mat);
    profileScene.add(profileMesh);

    if (p.hasRing) {
        const ring = new THREE.Mesh(new THREE.RingGeometry(1.5 * 1.4, 1.5 * 2.1, 48), new THREE.MeshBasicMaterial({
            color: 0xe3caa0,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.55
        }));
        ring.rotation.x = Math.PI / 2.4;
        profileScene.add(ring);
    }
}

function animateProfileStage() {
    requestAnimationFrame(animateProfileStage);
    if (profileMesh) profileMesh.rotation.y += 0.006;
    if (profileRenderer && profileScene && profileCamera) profileRenderer.render(profileScene, profileCamera);
}

document.getElementById('profileForm').addEventListener('submit', e => {
    e.preventDefault();
    const email = getSession();
    if (!email) return;
    const users = getUsers();
    const rec = users[email] || {};
    rec.displayName = document.getElementById('profileName').value.trim();
    rec.favoritePlanet = document.getElementById('profilePlanet').value;
    users[email] = rec;
    saveUsers(users);
    document.getElementById('profileMsg').classList.add('show');
    updateNavAuth();
});

document.getElementById('acctLogout').addEventListener('click', () => {
    clearSession();
    showPage('solar');
});

document.getElementById('acctDelete').addEventListener('click', () => {
    const email = getSession();
    if (!email) return;
    const sure = confirm('Xoá tài khoản ' + email + '? Hành động này không thể hoàn tác.');
    if (!sure) return;
    const users = getUsers();
    delete users[email];
    saveUsers(users);
    localStorage.removeItem('galaxy_explored_' + email);
    clearSession();
    showPage('solar');
});

document.getElementById('changePassForm').addEventListener('submit', async e => {
    e.preventDefault();
    const email = getSession();
    if (!email) return;
    const curPass = document.getElementById('curPass').value;
    const newPass = document.getElementById('newPass').value;
    const newPass2 = document.getElementById('newPass2').value;
    const curErr = document.getElementById('curPassError');
    const newErr = document.getElementById('newPassError');
    const msg = document.getElementById('changePassMsg');
    curErr.classList.remove('show');
    newErr.classList.remove('show');
    msg.classList.remove('show');

    const users = getUsers();
    const rec = users[email];
    const curHash = await hashPassword(curPass, rec.salt);
    if (curHash !== rec.hash) {
        curErr.classList.add('show');
        return;
    }
    if (newPass !== newPass2) {
        newErr.classList.add('show');
        return;
    }

    const newSalt = randomSalt();
    const newHash = await hashPassword(newPass, newSalt);
    users[email] = {...rec,
        salt: newSalt,
        hash: newHash
    };
    saveUsers(users);
    msg.classList.add('show');
    document.getElementById('changePassForm').reset();
});

/* ---------------- 3D SOLAR SYSTEM ---------------- */
let renderer, scene, camera, sunMesh, planetMeshes = [];
let rotY = 0.35,
    rotX = -0.25,
    targetRotY = 0.35,
    targetRotX = -0.25,
    autoRotate = true;
let camDist = 82,
    targetCamDist = 82;
let lookTarget = new THREE.Vector3(0, 0, 0);
let targetLookTarget = new THREE.Vector3(0, 0, 0);
let focusedPlanet = null;
let focusedSun = false;
let flyMode = false;
let orbitSpeedMultiplier = 1;
let asteroidBelt = null;
let comets = [];
let raf = null;

function initSolar() {
    const canvas = document.getElementById('solar-canvas');
    renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, 1, 0.1, 500);

    const starGeo = new THREE.BufferGeometry();
    const count = 2400;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const r = 140 + Math.random() * 260;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        pos[i * 3 + 1] = r * Math.cos(phi);
        pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const starMat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.5,
        transparent: true,
        opacity: 0.75
    });
    scene.add(new THREE.Points(starGeo, starMat));

    scene.add(new THREE.AmbientLight(0x554488, 0.5));
    scene.add(new THREE.PointLight(0xffdca0, 2.4, 300));

    const sunGroup = new THREE.Group();
    sunMesh = new THREE.Mesh(new THREE.SphereGeometry(3.4, 48, 48), new THREE.MeshBasicMaterial({
        color: 0xffb347
    }));
    sunGroup.add(sunMesh);
    const sunGlow = new THREE.Mesh(new THREE.SphereGeometry(4.4, 32, 32), new THREE.MeshBasicMaterial({
        color: 0xff8a3d,
        transparent: true,
        opacity: 0.18
    }));
    sunGroup.add(sunGlow);
    scene.add(sunGroup);

    planetMeshes = [];
    PLANETS.forEach(p => {
        const orbitCurve = new THREE.EllipseCurve(0, 0, p.orbit, p.orbit, 0, Math.PI * 2);
        const pts = orbitCurve.getPoints(128).map(pt => new THREE.Vector3(pt.x, 0, pt.y));
        const orbitGeo = new THREE.BufferGeometry().setFromPoints(pts);
        const orbitMat = new THREE.LineBasicMaterial({
            color: 0x6a5cc7,
            transparent: true,
            opacity: 0.22
        });
        scene.add(new THREE.LineLoop(orbitGeo, orbitMat));

        const group = new THREE.Group();
        group.rotation.y = Math.random() * Math.PI * 2;
        const tex = new THREE.CanvasTexture(PLANET_CANVAS[p.key]);
        const mesh = new THREE.Mesh(new THREE.SphereGeometry(p.radius, 48, 48), new THREE.MeshStandardMaterial({
            map: tex,
            roughness: 0.8,
            metalness: 0.08
        }));
        mesh.position.set(p.orbit, 0, 0);
        mesh.userData = p;
        group.add(mesh);

        if (p.hasRing) {
            const ring = new THREE.Mesh(new THREE.RingGeometry(p.radius * 1.4, p.radius * 2.3, 48), new THREE.MeshBasicMaterial({
                color: 0xd8c9a3,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.55
            }));
            ring.rotation.x = Math.PI / 2.4;
            ring.position.copy(mesh.position);
            group.add(ring);
        }
        scene.add(group);
        planetMeshes.push({
            group,
            mesh,
            data: p,
            angle: group.rotation.y
        });
    });

    asteroidBelt = createAsteroidBelt();
    scene.add(asteroidBelt);

    comets = createComets();
    comets.forEach(c => scene.add(c.group));

    updateCameraFromRot();

    canvas.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerup', onClickCheck);
    window.addEventListener('resize', resizeSolar);
    document.getElementById('panelClose').addEventListener('click', () => {
        document.getElementById('planetPanel').classList.remove('active');
        unfocusPlanet();
    });
    document.getElementById('sunPanelClose').addEventListener('click', () => {
        document.getElementById('sunPanel').classList.remove('active');
        unfocusPlanet();
    });
    document.getElementById('flyToggleBtn').addEventListener('click', () => {
        flyMode = !flyMode;
        updateFlyButton();
    });
    document.querySelectorAll('.speed-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            orbitSpeedMultiplier = parseFloat(btn.dataset.speed);
            document.querySelectorAll('.speed-btn').forEach(b => b.classList.toggle('active', b === btn));
        });
    });

    resizeSolar();
    animate();
}

/* ---------------- ASTEROID BELT ---------------- */
function createAsteroidBelt() {
    const beltInner = 24.5,
        beltOuter = 28.5;
    const count = 900;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const r = beltInner + Math.random() * (beltOuter - beltInner);
        const theta = Math.random() * Math.PI * 2;
        const y = (Math.random() - 0.5) * 1.4;
        positions[i * 3] = r * Math.cos(theta);
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = r * Math.sin(theta);
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
        color: 0xab9c85,
        size: 0.16,
        transparent: true,
        opacity: 0.75
    });
    const points = new THREE.Points(geo, mat);
    const group = new THREE.Group();
    group.add(points);
    return group;
}

/* ---------------- COMETS ---------------- */
function createCometTailTexture() {
    const c = document.createElement('canvas');
    c.width = 32;
    c.height = 256;
    const ctx = c.getContext('2d');
    const g = ctx.createLinearGradient(0, 256, 0, 0);
    g.addColorStop(0, 'rgba(190,210,255,0)');
    g.addColorStop(0.55, 'rgba(190,210,255,0.28)');
    g.addColorStop(1, 'rgba(255,255,255,0.95)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 32, 256);
    return new THREE.CanvasTexture(c);
}

function createGlowTexture() {
    const c = document.createElement('canvas');
    c.width = 64;
    c.height = 64;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,0.95)');
    g.addColorStop(0.4, 'rgba(255,255,255,0.5)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(c);
}

function createComets() {
    const tailTex = createCometTailTexture();
    const glowTex = createGlowTexture();
    const list = [];
    for (let i = 0; i < 2; i++) {
        const group = new THREE.Group();
        const head = new THREE.Sprite(new THREE.SpriteMaterial({
            map: glowTex,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        }));
        head.scale.set(1.6, 1.6, 1);
        const tail = new THREE.Sprite(new THREE.SpriteMaterial({
            map: tailTex,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        }));
        tail.scale.set(1.4, 11, 1);
        group.add(tail);
        group.add(head);
        group.visible = false;
        const comet = {
            group,
            head,
            tail,
            active: false,
            life: 0,
            duration: 1,
            from: new THREE.Vector3(),
            to: new THREE.Vector3(),
            respawnAt: 2 + Math.random() * 8 + i * 4
        };
        list.push(comet);
    }
    return list;
}

function spawnComet(comet) {
    const r = 95 + Math.random() * 55;
    const theta1 = Math.random() * Math.PI * 2;
    const y1 = (Math.random() - 0.5) * 60;
    comet.from.set(r * Math.cos(theta1), y1, r * Math.sin(theta1));
    const targetOffset = 12 + Math.random() * 20;
    const theta2 = theta1 + Math.PI + (Math.random() - 0.5) * 1.2;
    comet.to.set(targetOffset * Math.cos(theta2), (Math.random() - 0.5) * 10, targetOffset * Math.sin(theta2));
    comet.life = 0;
    comet.duration = 5 + Math.random() * 4;
    comet.active = true;
    comet.group.visible = true;
}

function updateComets(dt) {
    comets.forEach(comet => {
        if (!comet.active) {
            comet.respawnAt -= dt;
            if (comet.respawnAt <= 0) spawnComet(comet);
            return;
        }
        comet.life += dt;
        const t = Math.min(1, comet.life / comet.duration);
        comet.group.position.lerpVectors(comet.from, comet.to, t);
        const dir = comet.to.clone().sub(comet.from).normalize();
        const screenAngle = Math.atan2(dir.x, dir.z);
        comet.tail.material.rotation = screenAngle;
        const fadeIn = Math.min(1, t * 6);
        const fadeOut = Math.min(1, (1 - t) * 6);
        const alpha = Math.min(fadeIn, fadeOut);
        comet.head.material.opacity = alpha;
        comet.tail.material.opacity = alpha * 0.9;
        if (t >= 1) {
            comet.active = false;
            comet.group.visible = false;
            comet.respawnAt = 6 + Math.random() * 14;
        }
    });
}

function resizeSolar() {
    const canvas = document.getElementById('solar-canvas');
    const w = canvas.parentElement.clientWidth;
    const h = canvas.parentElement.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
}

function updateCameraFromRot() {
    camera.position.x = lookTarget.x + camDist * Math.sin(rotY) * Math.cos(rotX);
    camera.position.y = lookTarget.y + camDist * Math.sin(rotX) * -1 + camDist * 0.366;
    camera.position.z = lookTarget.z + camDist * Math.cos(rotY) * Math.cos(rotX);
    camera.lookAt(lookTarget.x, lookTarget.y, lookTarget.z);
}

function focusOnPlanet(pm) {
    focusedPlanet = pm;
    focusedSun = false;
    targetCamDist = Math.max(10, Math.min(30, pm.data.radius * 12));
    autoRotate = false;
    flyMode = false;
    updateFlyButton();
}

function focusOnSun() {
    focusedPlanet = null;
    focusedSun = true;
    flyMode = false;
    targetCamDist = 14;
    targetLookTarget.set(0, 0, 0);
    autoRotate = false;
}

function unfocusPlanet() {
    focusedPlanet = null;
    focusedSun = false;
    flyMode = false;
    targetCamDist = 82;
    targetLookTarget.set(0, 0, 0);
}

function updateFlyButton() {
    const btn = document.getElementById('flyToggleBtn');
    if (!btn) return;
    btn.classList.toggle('active', flyMode);
    btn.innerHTML = T(flyMode ? 'flyActive' : 'flyStart');
}

let dragging = false,
    prevX = 0,
    prevY = 0,
    clickStart = {
        x: 0,
        y: 0
    };

function onDown(e) {
    dragging = true;
    prevX = e.clientX;
    prevY = e.clientY;
    clickStart = {
        x: e.clientX,
        y: e.clientY
    };
    autoRotate = false;
}

function onUp() {
    dragging = false;
}

function onMove(e) {
    if (!dragging) return;
    const dx = e.clientX - prevX,
        dy = e.clientY - prevY;
    targetRotY -= dx * 0.004;
    targetRotX = Math.max(-0.9, Math.min(0.6, targetRotX - dy * 0.003));
    prevX = e.clientX;
    prevY = e.clientY;
}

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onClickCheck(e) {
    const moved = Math.hypot(e.clientX - clickStart.x, e.clientY - clickStart.y);
    if (moved > 6) return;
    const canvas = document.getElementById('solar-canvas');
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects([...planetMeshes.map(pm => pm.mesh), sunMesh]);
    if (hits.length) {
        const obj = hits[0].object;
        if (obj === sunMesh) {
            focusOnSun();
            document.getElementById('planetPanel').classList.remove('active');
            showSunPanel();
        } else {
            const pm = planetMeshes.find(pm => pm.mesh === obj);
            if (pm) focusOnPlanet(pm);
            document.getElementById('sunPanel').classList.remove('active');
            showPanel(obj.userData);
        }
    } else if (focusedPlanet || focusedSun) {
        unfocusPlanet();
        document.getElementById('planetPanel').classList.remove('active');
        document.getElementById('sunPanel').classList.remove('active');
    }
}

function showSunPanel() {
    document.getElementById('sunPanel').classList.add('active');
}

let lastPanelPlanet = null;

function showPanel(p) {
    lastPanelPlanet = p;
    document.getElementById('planetPanel').classList.add('active');
    document.getElementById('pOrder').textContent = T('planetOrderLine') + ' ' + p.order;
    document.getElementById('pName').textContent = planetField(p, 'name');
    document.getElementById('pDesc').textContent = planetField(p, 'desc');
    document.getElementById('pSize').textContent = p.size;
    document.getElementById('pDist').textContent = planetField(p, 'dist');
    document.getElementById('pMoons').textContent = p.moons;
    document.getElementById('pDay').textContent = planetField(p, 'day');
    markExplored(p.key);
}

let lastFrameTime = null;

function animate(ts) {
    raf = requestAnimationFrame(animate);
    if (currentRoute !== 'solar') {
        lastFrameTime = null;
        return;
    }
    const dt = lastFrameTime ? Math.min(0.1, (ts - lastFrameTime) / 1000) : 0.016;
    lastFrameTime = ts;
    if (autoRotate) targetRotY += 0.0009;
    rotY += (targetRotY - rotY) * 0.06;
    rotX += (targetRotX - rotX) * 0.06;
    sunMesh.rotation.y += 0.0015;
    planetMeshes.forEach(pm => {
        pm.angle += pm.data.speed * 0.35 * orbitSpeedMultiplier;
        pm.group.rotation.y = pm.angle;
        pm.mesh.rotation.y += 0.01;
    });
    if (asteroidBelt) asteroidBelt.rotation.y += 0.0006 * orbitSpeedMultiplier;
    updateComets(dt);
    if (focusedPlanet) {
        const fp = focusedPlanet;
        targetLookTarget.set(fp.data.orbit * Math.cos(fp.angle), 0, -fp.data.orbit * Math.sin(fp.angle));
    }
    camDist += (targetCamDist - camDist) * 0.05;
    lookTarget.lerp(targetLookTarget, 0.07);
    if (flyMode && focusedPlanet) {
        const fp = focusedPlanet;
        const planetPos = new THREE.Vector3(fp.data.orbit * Math.cos(fp.angle), 0, -fp.data.orbit * Math.sin(fp.angle));
        const tangent = new THREE.Vector3(Math.sin(fp.angle), 0, Math.cos(fp.angle)).normalize();
        const chaseDist = fp.data.radius * 5 + 3.5;
        const chaseHeight = fp.data.radius * 1.8 + 1.2;
        const camPos = planetPos.clone().addScaledVector(tangent, chaseDist);
        camPos.y += chaseHeight;
        camera.position.lerp(camPos, 0.08);
        camera.lookAt(planetPos.x, planetPos.y, planetPos.z);
    } else {
        updateCameraFromRot();
    }
    renderer.render(scene, camera);
}

/* ---------------- AMBIENT SPACE MUSIC ---------------- */
let audioCtx = null,
    musicNodes = null,
    musicPlaying = false;

function startMusic() {
    if (!audioCtx) audioCtx = new(window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const master = audioCtx.createGain();
    master.gain.value = 0.0001;
    master.connect(audioCtx.destination);
    master.gain.linearRampToValueAtTime(0.055, audioCtx.currentTime + 2.5);

    const freqs = [98, 146.83, 196, 220];
    const nodes = [];
    freqs.forEach((f, i) => {
        const osc = audioCtx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = f;
        const gain = audioCtx.createGain();
        gain.gain.value = 0.25;
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 800;
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(master);
        osc.start();
        nodes.push(osc);

        const lfo = audioCtx.createOscillator();
        lfo.frequency.value = 0.05 + i * 0.02;
        const lfoGain = audioCtx.createGain();
        lfoGain.gain.value = 0.12;
        lfo.connect(lfoGain);
        lfoGain.connect(gain.gain);
        lfo.start();
        nodes.push(lfo);
    });
    musicNodes = {
        master,
        nodes
    };
    musicPlaying = true;
    document.getElementById('musicToggle').textContent = '🔊';
}

function stopMusic() {
    if (!musicNodes) return;
    const now = audioCtx.currentTime;
    musicNodes.master.gain.linearRampToValueAtTime(0.0001, now + 1);
    const toStop = musicNodes.nodes;
    setTimeout(() => {
        toStop.forEach(o => {
            try {
                o.stop();
            } catch (e) {}
        });
    }, 1100);
    musicNodes = null;
    musicPlaying = false;
    document.getElementById('musicToggle').textContent = '🔈';
}
document.getElementById('musicToggle').addEventListener('click', () => {
    musicPlaying ? stopMusic() : startMusic();
});

/* ---------------- FULLSCREEN ---------------- */
document.getElementById('fullscreenToggle').addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
    } else {
        document.exitFullscreen();
    }
});
document.addEventListener('fullscreenchange', () => {
    document.getElementById('fullscreenToggle').textContent = document.fullscreenElement ? '⤢' : '⛶';
});

/* ---------------- SPACE QUIZ ---------------- */
function shuffle(arr) {
    return arr.slice().sort(() => Math.random() - 0.5);
}
const QUIZ_QUESTIONS = [{
    q: 'Hành tinh nào gần Mặt Trời nhất?',
    qEn: 'Which planet is closest to the Sun?',
    a: 'mercury'
}, {
    q: 'Hành tinh nào nóng nhất hệ Mặt Trời do hiệu ứng nhà kính?',
    qEn: 'Which planet is the hottest due to the greenhouse effect?',
    a: 'venus'
}, {
    q: 'Hành tinh nào được gọi là "hành tinh đỏ"?',
    qEn: 'Which planet is known as the "red planet"?',
    a: 'mars'
}, {
    q: 'Hành tinh nào lớn nhất hệ Mặt Trời, có Vết Đỏ Lớn?',
    qEn: 'Which is the largest planet, home to the Great Red Spot?',
    a: 'jupiter'
}, {
    q: 'Hành tinh nào nổi tiếng với vành đai băng đá rộng lớn?',
    qEn: 'Which planet is famous for its vast icy rings?',
    a: 'saturn'
}, {
    q: 'Hành tinh nào xa Mặt Trời nhất trong hệ?',
    qEn: 'Which planet is farthest from the Sun?',
    a: 'neptune'
}, ];
const QUIZ_TIME_LIMIT = 12; // giây mỗi câu
let quizIndex = 0,
    quizScore = 0, // số câu đúng
    quizOrder = [],
    quizLives = 3,
    quizCombo = 0,
    quizMaxCombo = 0,
    quizPoints = 0,
    quizAnswered = false,
    quizTimerId = null,
    quizTimeLeft = QUIZ_TIME_LIMIT;

function quizQ(item) {
    return currentLang === 'en' ? item.qEn : item.q;
}

/* ---- sound fx (reuses the shared audioCtx used for ambient music) ---- */
function ensureQuizAudioCtx() {
    if (!audioCtx) audioCtx = new(window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
}

function playQuizSfx(kind) {
    try {
        const ctx = ensureQuizAudioCtx();
        const now = ctx.currentTime;
        if (kind === 'win') {
            [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
                const o = ctx.createOscillator(),
                    g = ctx.createGain();
                o.type = 'sine';
                o.frequency.value = f;
                o.connect(g);
                g.connect(ctx.destination);
                const t = now + i * 0.09;
                g.gain.setValueAtTime(0.0001, t);
                g.gain.linearRampToValueAtTime(0.1, t + 0.02);
                g.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
                o.start(t);
                o.stop(t + 0.26);
            });
            return;
        }
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        if (kind === 'correct') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(660, now);
            osc.frequency.exponentialRampToValueAtTime(1100, now + 0.15);
            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
            osc.start(now);
            osc.stop(now + 0.26);
        } else if (kind === 'wrong') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(220, now);
            osc.frequency.exponentialRampToValueAtTime(90, now + 0.3);
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
            osc.start(now);
            osc.stop(now + 0.36);
        } else if (kind === 'gameover') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(300, now);
            osc.frequency.exponentialRampToValueAtTime(80, now + 0.6);
            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
            osc.start(now);
            osc.stop(now + 0.71);
        }
    } catch (e) {}
}

function clearQuizTimer() {
    if (quizTimerId) {
        clearInterval(quizTimerId);
        quizTimerId = null;
    }
}

function updateQuizTimerBar() {
    const bar = document.getElementById('quizTimerBar');
    if (!bar) return;
    const pct = Math.max(0, (quizTimeLeft / QUIZ_TIME_LIMIT) * 100);
    bar.style.width = pct + '%';
    bar.classList.toggle('warn', pct <= 50 && pct > 20);
    bar.classList.toggle('danger', pct <= 20);
}

function startQuizTimer(onExpire) {
    clearQuizTimer();
    quizTimeLeft = QUIZ_TIME_LIMIT;
    updateQuizTimerBar();
    quizTimerId = setInterval(() => {
        quizTimeLeft = Math.max(0, quizTimeLeft - 0.1);
        updateQuizTimerBar();
        if (quizTimeLeft <= 0) {
            clearQuizTimer();
            onExpire();
        }
    }, 100);
}

function heartsHTML() {
    let s = '';
    for (let i = 0; i < 3; i++) {
        s += `<span class="${i < quizLives ? '' : 'heart-lost'}">❤️</span>`;
    }
    return s;
}

function showComboPopup() {
    const wrap = document.getElementById('quizCardWrap');
    if (!wrap) return;
    wrap.querySelectorAll('.quiz-combo-pop').forEach(el => el.remove());
    const pop = document.createElement('div');
    pop.className = 'quiz-combo-pop';
    pop.textContent = `🔥 COMBO x${quizCombo}`;
    wrap.appendChild(pop);
    setTimeout(() => pop.remove(), 900);
}

function launchConfetti() {
    const area = document.getElementById('quizArea');
    if (!area) return;
    area.style.position = 'relative';
    const colors = ['#7c5cff', '#ff5fa8', '#ffb347', '#9fd6d6', '#3f7dd6'];
    for (let i = 0; i < 24; i++) {
        const c = document.createElement('div');
        c.className = 'quiz-confetti';
        c.style.left = (Math.random() * 100) + '%';
        c.style.background = colors[Math.floor(Math.random() * colors.length)];
        c.style.animationDelay = (Math.random() * 0.4) + 's';
        c.style.animationDuration = (0.9 + Math.random() * 0.6) + 's';
        area.appendChild(c);
        setTimeout(() => c.remove(), 2000);
    }
}

function quizIntroHTML() {
    return `
    <div class="detail-card" style="grid-template-columns:1fr;text-align:center;">
      <div>
        <div class="detail-order">${T('quizReady')}</div>
        <h3>${T('quizIntroTitle')}</h3>
        <div class="desc">${QUIZ_QUESTIONS.length} ${currentLang==='en' ? 'multiple-choice questions about the planets in the solar system.' : 'câu hỏi trắc nghiệm về các hành tinh trong hệ Mặt Trời.'}</div>
        <div class="quiz-rules">
          <div>❤️ ${T('quizRulesLives')}</div>
          <div>⏱️ ${T('quizRulesTimer')}</div>
          <div>🔥 ${T('quizRulesCombo')}</div>
        </div>
        <button type="button" class="auth-submit" style="margin-top:14px;" id="quizStartBtn">${T('quizStart')}</button>
      </div>
    </div>`;
}

function startQuiz() {
    quizIndex = 0;
    quizScore = 0;
    quizLives = 3;
    quizCombo = 0;
    quizMaxCombo = 0;
    quizPoints = 0;
    quizOrder = shuffle(QUIZ_QUESTIONS);
    renderQuizQuestion();
}

function quizBestKey() {
    return getSession() ? ('galaxy_quiz_best_' + getSession()) : 'galaxy_quiz_best_guest';
}

function getQuizBest() {
    return parseInt(localStorage.getItem(quizBestKey()) || '0', 10) || 0;
}

function setQuizBest(score) {
    localStorage.setItem(quizBestKey(), String(score));
}

function renderQuizQuestion() {
    clearQuizTimer();
    const area = document.getElementById('quizArea');
    if (quizIndex >= quizOrder.length || quizLives <= 0) {
        renderQuizResult();
        return;
    }
    quizAnswered = false;
    const item = quizOrder[quizIndex];
    const correctPlanet = PLANETS.find(p => p.key === item.a);
    const wrongOptions = shuffle(PLANETS.filter(p => p.key !== item.a)).slice(0, 3);
    const options = shuffle([correctPlanet, ...wrongOptions]);
    const letters = ['A', 'B', 'C', 'D'];
    area.innerHTML = `
    <div class="quiz-hud">
      <div class="quiz-lives" aria-label="${T('quizGameOver')}">${heartsHTML()}</div>
      <div class="quiz-score-pill">⭐ ${quizPoints} ${T('quizPointsLabel')}${quizCombo>=2?`<span class="quiz-combo">🔥x${quizCombo}</span>`:''}</div>
    </div>
    <div class="quiz-timerbar-wrap"><div class="quiz-timerbar" id="quizTimerBar"></div></div>
    <div class="detail-card" style="grid-template-columns:1fr;position:relative;" id="quizCardWrap">
      <div>
        <div class="detail-order">${T('quizQuestionLabel')} ${quizIndex+1}/${quizOrder.length}</div>
        <h3 style="font-size:20px;">${quizQ(item)}</h3>
        <div id="quizOptions" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-top:20px;"></div>
      </div>
    </div>`;
            const optWrap = document.getElementById('quizOptions');
            options.forEach((p, i) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'quiz-option-btn';
                btn.dataset.key = p.key;
                btn.innerHTML = `<span class="qkey">${letters[i]}</span>${planetField(p,'name')}`;
                btn.style.cssText = 'border-radius:10px;border:1px solid var(--ov-15);background:var(--ov-05);color:var(--text-star);cursor:pointer;font-size:14px;transition:transform .15s;';
                btn.addEventListener('click', () => handleQuizAnswer(p, item, btn, optWrap));
                optWrap.appendChild(btn);
            });
            startQuizTimer(() => handleQuizTimeout(item, optWrap));
        }

        function handleQuizAnswer(p, item, btn, optWrap) {
            if (quizAnswered) return;
            quizAnswered = true;
            clearQuizTimer();
            const buttons = [...optWrap.querySelectorAll('button')];
            buttons.forEach(b => b.disabled = true);
            const correct = p.key === item.a;
            if (correct) {
                btn.style.borderColor = 'var(--accent-solar)';
                btn.style.background = 'rgba(255,179,71,0.18)';
                quizScore++;
                quizCombo++;
                quizMaxCombo = Math.max(quizMaxCombo, quizCombo);
                const timeBonus = Math.round(quizTimeLeft * 5);
                const comboBonus = quizCombo >= 2 ? (quizCombo - 1) * 15 : 0;
                quizPoints += 100 + timeBonus + comboBonus;
                playQuizSfx('correct');
                if (quizCombo >= 2) showComboPopup();
            } else {
                btn.style.borderColor = 'var(--accent-plasma)';
                btn.style.background = 'rgba(255,95,168,0.15)';
                const correctBtn = buttons.find(b => b.dataset.key === item.a);
                if (correctBtn) {
                    correctBtn.style.borderColor = 'var(--accent-solar)';
                    correctBtn.style.background = 'rgba(255,179,71,0.12)';
                }
                quizCombo = 0;
                quizLives = Math.max(0, quizLives - 1);
                const cardWrap = document.getElementById('quizCardWrap');
                if (cardWrap) cardWrap.classList.add('quiz-shake');
                playQuizSfx('wrong');
            }
            setTimeout(() => {
                quizIndex++;
                renderQuizQuestion();
            }, 900);
        }

        function handleQuizTimeout(item, optWrap) {
            if (quizAnswered) return;
            quizAnswered = true;
            const buttons = [...optWrap.querySelectorAll('button')];
            buttons.forEach(b => b.disabled = true);
            const correctBtn = buttons.find(b => b.dataset.key === item.a);
            if (correctBtn) {
                correctBtn.style.borderColor = 'var(--accent-solar)';
                correctBtn.style.background = 'rgba(255,179,71,0.12)';
            }
            quizCombo = 0;
            quizLives = Math.max(0, quizLives - 1);
            const cardWrap = document.getElementById('quizCardWrap');
            if (cardWrap) {
                cardWrap.classList.add('quiz-shake');
                const label = document.createElement('div');
                label.className = 'quiz-combo-pop';
                label.style.background = '#ff4d4d';
                label.style.color = '#fff';
                label.textContent = `⏱️ ${T('quizTimeUp')}`;
                cardWrap.appendChild(label);
                setTimeout(() => label.remove(), 900);
            }
            playQuizSfx('wrong');
            setTimeout(() => {
                quizIndex++;
                renderQuizQuestion();
            }, 900);
        }

        function renderQuizResult() {
            clearQuizTimer();
            const area = document.getElementById('quizArea');
            const totalQ = quizOrder.length;
            const attempted = Math.min(quizIndex, totalQ) || 1;
            const gameOver = quizLives <= 0 && quizIndex < totalQ;
            const prevBest = getQuizBest();
            const isNewBest = quizScore > prevBest;
            if (isNewBest) setQuizBest(quizScore);
            const bestNow = Math.max(prevBest, quizScore);
            const pct = totalQ ? quizScore / totalQ : 0;
            const starCount = gameOver ? (quizScore > 0 ? 1 : 0) : (pct >= 1 ? 3 : pct >= 0.7 ? 2 : pct >= 0.4 ? 1 : 0);
            const accuracy = Math.round((quizScore / attempted) * 100);
            let starsHTML = '';
            for (let i = 0; i < 3; i++) starsHTML += `<span class="${i<starCount?'':'star-off'}">★</span>`;
            area.innerHTML = `
      <div class="detail-card" style="grid-template-columns:1fr;text-align:center;">
        <div>
          <div class="detail-order">${gameOver ? T('quizGameOver') : T('quizResult')}</div>
          <div class="quiz-stars">${starsHTML}</div>
          <h3>${T('quizScoreLine')} ${quizScore}/${totalQ} ${T('quizPoints')}</h3>
          <div class="desc">${gameOver ? T('quizGameOverDesc') : (quizScore===totalQ ? T('quizExcellent') : T('quizKeepGoing'))}</div>
          <div style="display:flex;gap:18px;justify-content:center;flex-wrap:wrap;margin-top:14px;font-family:var(--font-mono);font-size:13px;color:var(--text-dust);">
            <div>⭐ ${quizPoints} ${T('quizPointsLabel')}</div>
            <div>🎯 ${accuracy}% ${T('quizAccuracy')}</div>
            <div>🔥 x${quizMaxCombo} ${T('quizMaxCombo')}</div>
          </div>
          ${isNewBest ? `<div class="quiz-badge">🏆 ${T('quizNewBest')}</div>` : `<div class="quiz-best">${T('quizBestScore')}: ${bestNow}/${totalQ}</div>`}
          <div style="display:flex;gap:10px;justify-content:center;margin-top:16px;flex-wrap:wrap;">
            <button type="button" class="auth-submit" id="quizRetryBtn">${T('quizRetry')}</button>
            <button type="button" class="auth-submit" id="quizShareBtn" style="background:transparent;border:1px solid rgba(124,92,255,0.4);color:var(--text-star);">${T('quizShare')}</button>
          </div>
        </div>
      </div>`;
            document.getElementById('quizRetryBtn').addEventListener('click', startQuiz);
            const shareBtn = document.getElementById('quizShareBtn');
            shareBtn.addEventListener('click', () => {
                const msg = currentLang === 'en' ?
                    `I scored ${quizScore}/${totalQ} (${quizPoints} pts) on the Solar System Quiz! 🪐` :
                    `Tôi đạt ${quizScore}/${totalQ} (${quizPoints} điểm) trong Đố Vui Hệ Mặt Trời! 🪐`;
                const done = () => {
                    shareBtn.textContent = T('quizShareCopied');
                    setTimeout(() => {
                        shareBtn.textContent = T('quizShare');
                    }, 1800);
                };
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(msg).then(done).catch(done);
                } else {
                    done();
                }
            });
            if (!gameOver && quizScore === totalQ) {
                launchConfetti();
                playQuizSfx('win');
            } else if (gameOver) {
                playQuizSfx('gameover');
            }
        }
        document.getElementById('quizArea').innerHTML = quizIntroHTML();
        document.getElementById('quizStartBtn').addEventListener('click', startQuiz);

        /* ---------------- INIT ---------------- */
        function createStarTileURL() {
            const c = document.createElement('canvas');
            c.width = 220;
            c.height = 220;
            const ctx = c.getContext('2d');
            const rand = mulberry32(99);
            for (let i = 0; i < 95; i++) {
                const x = rand() * 220,
                    y = rand() * 220,
                    r = 0.3 + rand() * 1.3;
                ctx.beginPath();
                ctx.fillStyle = `rgba(255,255,255,${0.2+rand()*0.65})`;
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.fill();
            }
            return c.toDataURL();
        }
        (function addStarLayers() {
            const url = createStarTileURL();
            document.querySelectorAll('.auth-bg').forEach(bg => {
                const layer = document.createElement('div');
                layer.className = 'starfield-layer';
                layer.style.backgroundImage = `url(${url})`;
                layer.style.opacity = '0.5';
                bg.after(layer);
            });
        })();

        function routeFromHash() {
            const h = location.hash.replace('#/', '').replace('#', '');
            return pages.includes(h) ? h : 'banner';
        }
        window.addEventListener('hashchange', () => showPage(routeFromHash()));
        if (!location.hash) location.hash = '#/banner';
        showPage(routeFromHash(), {
            warp: false
        });

        /* ---------------- LANGUAGE TOGGLE WIRING ---------------- */
        document.getElementById('langToggle').addEventListener('click', () => {
            applyLanguage(currentLang === 'vi' ? 'en' : 'vi');
        });
        applyLanguage(currentLang);

        /* ---------------- THEME (LIGHT/DARK) TOGGLE ---------------- */
        function applyTheme(theme) {
            const isLight = theme === 'light';
            document.documentElement.classList.toggle('light-mode', isLight);
            document.getElementById('themeToggle').textContent = isLight ? '☀️' : '🌙';
            localStorage.setItem('siteTheme', theme);
        }
        applyTheme(localStorage.getItem('siteTheme') || 'dark');
        document.getElementById('themeToggle').addEventListener('click', () => {
            const isLight = document.documentElement.classList.contains('light-mode');
            applyTheme(isLight ? 'dark' : 'light');
        });


        const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicToggle");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
    if (isPlaying) {
        music.pause();
        musicBtn.innerHTML = "🔈";
    } else {
        music.play();
        musicBtn.innerHTML = "🔊";
    }

    isPlaying = !isPlaying;
});
