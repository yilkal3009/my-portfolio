// ገጹ ሙሉ በሙሉ ተጭኖ ሲያልቅ ኮዱ እንዲሰራ ያደርጋል
document.addEventListener('DOMContentLoaded', () => {
    
    // በተኑን በ ID እንጠራዋለን
    const themeBtn = document.getElementById('theme-toggle');

    // በተኑ መኖሩን እናረጋግጣለን
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            // በ body ላይ 'dark-mode' የሚለውን ክላስ ይጨምራል/ያጠፋል
            document.body.classList.toggle('dark-mode');
            
            // በትክክል መስራቱን በ Console ለማየት
            console.log("Mode toggled successfully!");
        });
    } else {
        console.error("Error: Button with ID 'theme-toggle' not found!");
    }
});
// ገጹ ተጭኖ ሲያልቅ የሚሰራ
document.addEventListener('DOMContentLoaded', () => {
    
    // ሁሉንም ሴክሽኖች መምረጥ
    const sections = document.querySelectorAll('section');

    const options = {
        threshold: 0.2 // 20% የሚሆነው ሴክሽን ሲታይ አኒሜሽኑ ይጀምራል
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // ሴክሽኑ ሲታይ 'appear' የሚለውን ክላስ ጨምር
                entry.target.classList.add('appear');
                // አንዴ ከታየ በኋላ መከታተሉን እንዲያቆም (ለአንድ ጊዜ ብቻ እንዲንቀሳቀስ)
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.toggle-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            // ከርዕሱ በላይ ያለውን 'section' መምረጥ
            const parent = header.parentElement;
            
            // 'active' የሚለውን ክላስ መጨመር ወይም መቀነስ
            parent.classList.toggle('active');
            
            // ሌሎቹ ተዘግተው አንዱ ብቻ እንዲከፈት ከፈለግክ ከታች ያለውን ኮድ ጨምር፡
            /*
            headers.forEach(other => {
                if(other !== header) other.parentElement.classList.remove('active');
            });
            */
        });
    });
});