function changeLanguage() {
    var htmlElement = document.querySelector('html');
    var currentLang = htmlElement.lang;

    // التبديل بين اللغتين
    var newLang = (currentLang === 'ar') ? 'en' : 'ar';

    // تعيين قيمة اللغة الجديدة
    htmlElement.lang = newLang;

    // تحديث النصوص بناءً على اللغة الجديدة (اختياري)
    if (newLang === 'ar') {
        document.getElementById('lm').innerText = 'Engineer ';
        document.getElementById('lb').innerText = ' nawar ';
        document.getElementById('ln').innerText = ' ammar';
        document.getElementById('iq').innerText = 'About';
        document.getElementById('iw').innerText = 'Services';
        document.getElementById('ie').innerText = 'Skills';
        document.getElementById('ir').innerText = 'Education';
        document.getElementById('it').innerText = 'nawar ammar';
        document.getElementById('iy').innerText = 'Engineer Nawar Haitham Ammar is a graduate of Al-Ittihad Private University';
        document.getElementById('iu').innerText = 'About';
        document.getElementById('io').innerText = 'I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.';
        document.getElementById('ip').innerText = 'Birthday:6 novmber 1999';
        document.getElementById('ia').innerText = 'Website:www.example.com';
        document.getElementById('is').innerText = 'Phone:0946990640';
        document.getElementById('id').innerText = 'City:Damascus, Mezzeh 86';
        document.getElementById('if').innerText = 'Age:26';
        document.getElementById('ig').innerText = 'Email:n094@gmail.com';
        document.getElementById('ih').innerText = 'About';
        document.getElementById('ij').innerText = 'Skills';
        document.getElementById('ik').innerText = 'html';
        document.getElementById('il').innerText = 'css';
        document.getElementById('iz').innerText = 'bootstrap';
        document.getElementById('ix').innerText = 'js';
        document.getElementById('ic').innerText = 'c++';
        document.getElementById('iv').innerText = 'c#';
        document.getElementById('ib').innerText = 'Skills';
        document.getElementById('in').innerText = 'Education';
        document.getElementById('im').innerText = 'I studied Informatics Engineering in the Computer Department at Al-Ittihad Private University in 2018 and graduated in 2024.';
        document.getElementById('oq').innerText = 'I was trained in computer skills and obtained an international certificate. I also studied programming such as C++, C#, Python, and databases.';
        document.getElementById('ow').innerText = 'He trained at Al-Munqiz Software Company under the supervision of the professor The great Muhammad Kamal Al-Munajjid on website design';
        document.getElementById('la').innerText = 'Education';
        document.getElementById('oe').innerText = 'communication links';
        document.getElementById('Services').innerText = 'Services';
        document.getElementById('or').innerText = 'Address';
        document.getElementById('ot').innerText = 'Damascus, Mezzeh 86, school, opposite the Stars Club';
        document.getElementById('oy').innerText = 'Call me';
        document.getElementById('ou').innerText = 'Email me';
        document.getElementById('ammar').innerText = 'AR';
    } else {
        document.getElementById('lm').innerText = ' المهندس ';
        document.getElementById('lb').innerText = 'نوار';
        document.getElementById('ln').innerText = 'عمار';
        document.getElementById('iq').innerText = 'حول';
        document.getElementById('iw').innerText = 'الخدمات';
        document.getElementById('ie').innerText = 'المهارات';
        document.getElementById('ir').innerText = 'تعليم';
        document.getElementById('it').innerText = 'نوارعمار';
        document.getElementById('iy').innerText = 'المهندس نوار هيثم عمار خريج جامعة الاتحاد الخاصة';
        document.getElementById('iu').innerText = 'حول';
        document.getElementById('io').innerText = 'لدي خبرة في الاستفادة من الأطر المرنة لتوفير ملخص قوي للنظرات العامة رفيعة المستوى. تعمل الأساليب التكرارية لاستراتيجية الشركة على تعزيز التفكير التعاوني لتعزيز القيمة الإجمالية المقترحة.';
        document.getElementById('ip').innerText = 'عيد الميلاد: 6 نوفمبر 1999';
        document.getElementById('ia').innerText = 'الموقع الإلكتروني: www.example.com';
        document.getElementById('is').innerText = 'الهاتف:0946990640';
        document.getElementById('id').innerText = 'المدينة:دمشق، المزة 86';
        document.getElementById('if').innerText = 'العمر:26';
        document.getElementById('ig').innerText = 'البريد الإلكتروني:n094@gmail.com';
        document.getElementById('ih').innerText = 'حول';
        document.getElementById('ij').innerText = 'المهارات';
        document.getElementById('ik').innerText = 'html';
        document.getElementById('il').innerText = 'css';
        document.getElementById('iz').innerText = 'bootstrap';
        document.getElementById('ix').innerText = 'js';
        document.getElementById('ic').innerText = 'c++';
        document.getElementById('iv').innerText = 'c#';
        document.getElementById('ib').innerText = 'المهارات';
        document.getElementById('in').innerText = 'تعليم';
        document.getElementById('im').innerText = 'درست هندسة المعلوماتية في قسم الحاسوب في جامعة الاتحاد الخاصة سنة 2018 وتخرجت سنة 2024.';
        document.getElementById('oq').innerText = 'لقد تدربت على مهارات الكمبيوتر وحصلت على شهادة دولية كما درست البرمجة مثل C++ و C# و Python وقواعد البيانات.';
        document.getElementById('ow').innerText = 'تدرب في شركة المنقذ للبرمجيات تحت إشراف الأستاذ الكبير محمد كمال المنجد في تصميم المواقع';
        document.getElementById('la').innerText = 'تعليم';
        document.getElementById('oe').innerText = 'روابط الاتصالات';
        document.getElementById('Services').innerText = 'المهارات';
        document.getElementById('or').innerText = 'عنوان';
        document.getElementById('ot').innerText = 'دمشق، المزة 86، المدرسة، مقابل نادي النجوم';
        document.getElementById('oy').innerText = 'اتصل بي';
        document.getElementById('ou').innerText = 'أرسل لي بريدا إلكترونيا';
        document.getElementById('ammar').innerText = 'EN';

    }
}