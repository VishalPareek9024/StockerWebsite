// document.getElementsByClassName('learnBtn')[0].addEventListener('mouseover', () => {
//     document.getElementsByClassName('watchBtn')[0].style.backgroundColor = 'var(--primary-color)';
//     document.getElementsByClassName('watchBtn')[0].style.color = 'var(--white-color)';
// })

// document.getElementsByClassName('learnBtn')[0].addEventListener('mouseout', () => {
//     document.getElementsByClassName('watchBtn')[0].style.backgroundColor = 'var(--white-color)';
//     document.getElementsByClassName('watchBtn')[0].style.color = 'var(--primary-color)';
// })

// document.getElementsByClassName('watchBtn')[0].addEventListener('mouseover', () => {
//     document.getElementsByClassName('learnBtn')[0].style.backgroundColor = 'var(--white-color)';
//     document.getElementsByClassName('learbBtn')[0].style.color = 'var(--primary-color)';
// })

// document.getElementsByClassName('watchBtn')[0].addEventListener('mouseout', () => {
//     document.getElementsByClassName('learnBtn')[0].style.backgroundColor = 'var(--primary-color)';
//     document.getElementsByClassName('learnBtn')[0].style.color = 'var(--white-color)';
// })


let menu = document.querySelector('.menu i');
console.log(menu);

let rightnav = document.querySelector('.rightnav');

menu.addEventListener('click', () => {
    console.log("hiii");

    if (rightnav.classList.contains('active')) {
        // If 'rightnav' is active, remove the 'active' class and hide it
        rightnav.classList.remove('animOut');
        rightnav.classList.add('animIn'); // Optional: animation in class
        rightnav.classList.remove('active');
        menu.classList.remove('fa-x');
        console.log("display none");
        
    } else {
        // If 'rightnav' is not active, add the 'active' class and show it
        rightnav.classList.remove('animIn');
        rightnav.classList.add('animOut'); // Optional: remove animation out class
        rightnav.classList.add('active');
        menu.classList.add('fa-x');
        console.log("display block");
    }
});

// =============== Frequently Asked Questions ==============

let question = document.querySelectorAll('.question h3')

question.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        item.classList.toggle('freq-border')
        let a = item.querySelector('span i')
        a.classList.toggle('fa-angle-up')
        // a.classList.toogle('fa-angle-up')
        item.nextElementSibling.classList.toggle('hide')
        for(let i= 0;i<question.length;i++)
        {
            if(i !=  index)
            {
                (question[i].nextElementSibling).classList.add('hide')
                question[i].classList.remove('freq-border')
                question[i].querySelector('span i').classList.remove('fa-angle-up')
            }
        } 
    })
})


document.querySelectorAll('.rightnav ul li a').forEach(anchor=>{

    anchor.addEventListener('click',(e)=>{
        e.preventDefault();
        const target =  document.querySelector(anchor.getAttribute('href'));
        target.scrollIntoView({
            behavior : 'smooth',
            block : 'start'
        })
    })
    

})



// 1. git clone "repo url"
// 2. git status
// 3. git add .
// 4. git add "file name "
// 5. git commit -m "message you want to give"
// 6. git push origin main
// 7. cd "folder name"