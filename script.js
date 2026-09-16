const revealItems = document.querySelectorAll('.hero-copy, .hero-art, .section-heading, .project, .principle, .contact-card');

const translations = {
  en: {
    navWork: 'Achievements & Experience', navApproach: 'Approach', navContact: 'Contact', available: 'Available for work',
    heroEyebrow: 'Cybersecurity student · IT support', heroTitle: 'Making technology<br><em>feel less difficult.</em>',
    heroIntro: 'I’m Anujin, a cybersecurity student building a career in remote IT support. I bring a calm, security-minded approach to solving technical problems and helping people get back to work.',
    heroButton: 'Let’s work together', heroLink: 'See selected work', learning: 'currently learning', learningTopic: 'Cloud security<br>&amp; incident response',
    skillSupport: 'technical support', skillSecurity: 'security fundamentals', skillCommunication: 'clear communication', skillLearning: 'continuous learning',

workEyebrow: 'My Progress',
workTitle: 'Learning, practicing,<br><em>and growing.</em>',
workIntro: 'A look at my academic progress and the technical experience I’m building through my cybersecurity studies.',

projectTypeOne: 'Academic Achievement',
projectOneTitle: '3.76<br>GPA',
projectOneText: 'Maintaining strong academic performance while pursuing a Bachelor’s degree in Cybersecurity in the United States.',

tagNetworking: 'Cybersecurity',
tagRisk: 'Academic',
tagDocumentation: 'Continuous Learning',

projectTypeTwo: 'Hands-on Experience',
projectTwoTitle: 'Technical<br>Training',
projectTwoText: 'Building practical experience through labs involving Windows Server, Active Directory, Azure, networking, virtualization, and cybersecurity.',

tagTroubleshooting: 'Windows Server',
tagUx: 'Active Directory',
 approachEyebrow: 'My approach', approachStatement: 'Good support is a mix of <em>technical thinking</em>, human language, and the patience to find the actual problem.',
    principleOneTitle: 'Listen first', principleOneText: 'Understand the person and the impact before jumping to a fix.', principleTwoTitle: 'Make it clear', principleTwoText: 'Translate technical steps into instructions people can actually use.', principleThreeTitle: 'Leave it better', principleThreeText: 'Document the solution so the same problem is easier next time.',
    contactEyebrow: 'Open to opportunities', contactTitle: 'Let’s solve<br><em>something.</em>', contactText: 'I’m currently looking for an entry-level remote IT support role where I can keep learning, contribute reliably, and grow into cybersecurity.', footerBuilt: 'Built with curiosity &amp; care', footerTop: 'Back to top ↑'
  },
  mn: {
    navWork: 'Амжилт & Туршлага', navApproach: 'Миний арга барил', navContact: 'Холбоо барих', available: 'Шинэ боломжид нээлттэй',
    heroEyebrow: 'Кибер аюулгүй байдлын оюутан · IT дэмжлэг', heroTitle: 'Технологийг<br><em>илүү ойлгомжтой болгоно.</em>',
    heroIntro: 'Намайг Анужин гэдэг. Би кибер аюулгүй байдлын чиглэлээр суралцдаг бөгөөд зайнаас IT дэмжлэг үзүүлэх чиглэлээр карьераа эхлүүлж байна. Техникийн асуудлыг тайван, аюулгүй байдлыг эрхэмлэн шийдэж, техникийн асуудлыг хурдан, ойлгомжтой шийдвэрлэхэд туслахыг зорьдог.',
    heroButton: 'Хамтдаа ажиллая', heroLink: 'Хийсэн ажлууд', learning: 'одоо судалж буй', learningTopic: 'Үүлэн орчны аюулгүй байдал<br>&amp; ослын хариу арга хэмжээ',
    skillSupport: 'техникийн дэмжлэг', skillSecurity: 'аюулгүй байдлын үндэс', skillCommunication: 'ойлгомжтой харилцаа', skillLearning: 'тасралтгүй суралцах',

workEyebrow: 'Миний хөгжлийн зам',
workTitle: 'Суралцаж, дадлагажиж,<br><em>хөгжсөөр.</em>',
workIntro: 'Кибер аюулгүй байдлын чиглэлээр суралцах хугацаандаа гаргасан сурлагын амжилт болон хуримтлуулж буй практик туршлага.',

projectTypeOne: 'Сурлагын амжилт',
projectOneTitle: '3.76<br>GPA',
projectOneText: 'АНУ-д кибер аюулгүй байдлын бакалаврын хөтөлбөрт суралцаж, сурлагын өндөр үзүүлэлтээ хадгалж байна.',

tagNetworking: 'Cybersecurity',
tagRisk: 'Сурлага',
tagDocumentation: 'Тасралтгүй суралцах',

projectTypeTwo: 'Практик туршлага',
projectTwoTitle: 'Техникийн<br>дадлага',
projectTwoText: 'Windows Server, Active Directory, Azure, сүлжээ, virtualization болон кибер аюулгүй байдлын лабораториудаар практик ур чадвараа хөгжүүлж байна.',

tagTroubleshooting: 'Windows Server',
tagUx: 'Active Directory',
    approachEyebrow: 'Миний арга барил', approachStatement: 'Сайн дэмжлэг гэдэг нь <em>техникийн сэтгэлгээ</em>, хүн ойлгох хэл, бодит асуудлыг олох тэвчээрийн хослол юм.',
    principleOneTitle: 'Эхлээд сонсох', principleOneText: 'Шийдэл рүү яарахаас өмнө тухайн хүн болон асуудлын нөлөөг ойлгоно.', principleTwoTitle: 'Ойлгомжтой болгох', principleTwoText: 'Техникийн алхмуудыг хүн бүр хэрэгжүүлж чадах заавар болгон тайлбарлана.', principleThreeTitle: 'Сайжруулж үлдээх', principleThreeText: 'Дараагийн удаа асуудлыг хялбар шийдэхийн тулд шийдлийг баримтжуулна.',
    contactEyebrow: 'Боломж хайж байна', contactTitle: 'Хамтдаа<br><em> шийдэл бүтээе.</em>', contactText: 'Би суралцаж, найдвартай хувь нэмэр оруулан, кибер аюулгүй байдлын чиглэлээр өсөх боломжтой анхан шатны зайны IT дэмжлэгийн ажил хайж байна.', footerBuilt: 'Суралцаж, хөгжсөөр бүтээв.', footerTop: 'Дээш буцах ↑'
  }
};

const languageToggle = document.querySelector('[data-lang-toggle]');
const language = localStorage.getItem('portfolio-language') || 'en';

function setLanguage(nextLanguage) {
  const selectedLanguage = translations[nextLanguage] ? nextLanguage : 'en';
  document.documentElement.lang = selectedLanguage === 'mn' ? 'mn' : 'en';
  document.title = selectedLanguage === 'mn' ? 'Анужин | Кибер аюулгүй байдал ба IT дэмжлэг' : 'Anujin | Cybersecurity & IT Support';
  document.querySelector('meta[name="description"]').setAttribute('content', selectedLanguage === 'mn' ? 'Анужингийн кибер аюулгүй байдал болон IT дэмжлэгийн портфолио.' : 'Anujin\'s cybersecurity and IT support portfolio.');
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const translation = translations[selectedLanguage][element.dataset.i18n];
    if (translation) element.innerHTML = translation;
  });
  languageToggle.textContent = selectedLanguage === 'mn' ? 'EN' : 'MN';
  languageToggle.setAttribute('aria-label', selectedLanguage === 'mn' ? 'Switch to English' : 'Монгол хэл рүү шилжих');
  localStorage.setItem('portfolio-language', selectedLanguage);
}

setLanguage(language);
languageToggle.addEventListener('click', () => setLanguage(document.documentElement.lang === 'mn' ? 'en' : 'mn'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => {
  item.classList.add('reveal');
  observer.observe(item);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.add('has-navigated');
  });
});
