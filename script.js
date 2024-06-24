let boxDropdown = document.querySelectorAll('.boxDropdown');
for (let x = 0; x < document.querySelectorAll('li.categ').length; x++) {
    let list = document.querySelectorAll('li.categ')[x];
    let boxDropdown_list =  document.querySelectorAll('.boxDropdown')[x];
    list.addEventListener('mouseenter',() =>{
        boxDropdown_list.style.display = 'block';
    })
    list.addEventListener('mouseleave',() =>{
        boxDropdown_list.style.display = 'none';
    })
}
for (let x = 0; x < boxDropdown.length; x++) {
    const box = boxDropdown[x];
    box.addEventListener('mouseenter',() =>{
        box.style.display = 'block';
    })
    box.addEventListener('mouseleave',() =>{
        box.style.display = 'none';
    })
}
let glasses = document.querySelectorAll('.results > div');
let img = document.querySelectorAll('div.results div img.glass');
let frontPose = [
    'https://static1.lenskart.com/media/catalog/product/cache/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//f/a/fallon-colby-fc-e11877-round-full-rim-c3-eyeglasses_fallon-colby-fc-e11877-round-full-rim-c3-eyeglasses_g_4530.jpg',
    'https://static1.lenskart.com/media/catalog/product/cache/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//f/a/fallon-colby-fc-e11874-round-full-rim-c2-eyeglasses_fallon-colby-fc-e11874-round-full-rim-c2-eyeglasses_g_4580.jpg',
    'https://static2.lenskart.com/media/catalog/product/cache/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-black-vc-e10117-c3-eyeglasses_vincent-chase-black-vc-e10117-c3-eyeglasses_m_4157_1_1.jpg',
    'https://static2.lenskart.com/media/catalog/product/cache/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e10363-c1-eyeglasses_vincent-chase-vc-e10363-c1-eyeglasses__j_5235_1_2__1.jpg',
    'https://static1.lenskart.com/media/catalog/product/cache/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//f/a/fallon-colby-fc-e11874-round-full-rim-c3-eyeglasses_fallon-colby-fc-e11874-round-full-rim-c3-eyeglasses_g_4488.jpg',
    'https://static2.lenskart.com/media/catalog/product/cache/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//f/a/fallon-colby-fc-e11875-wayfarer-full-rim-c1-eyeglasses_fallon-colby-fc-e11875-wayfarer-full-rim-c1-eyeglasses_g_4538.jpg',
    'https://static.lenskart.com/media/catalog/product/cache/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-matte-black-blue-air-vc-2251-c2-eyeglasses_vincent-chase-matte-black-blue-air-vc-2251-c2-eyeglasses_m_4088_1_1.jpg',
    'https://static.lenskart.com/media/catalog/product/cache/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//f/a/fallon-colby-fc-e12086-c4-eyeglasses_fallon-colby-fc-e12086-c4-eyeglasses_g_8646.jpg',
    'https://static2.lenskart.com/media/catalog/product/cache/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//f/a/fallon-colby-full-rim-fc-e12090-c1-eyeglasses_fallon-colby-full-rim-fc-e12090-c1-eyeglasses_G_0771.jpg'
]
let sidePose = [
    'https://static.lenskart.com/media/catalog/product/cache/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//f/a/fallon-colby-fc-e11877-round-full-rim-c3-eyeglasses_fallon-colby-fc-e11877-round-full-rim-c3-eyeglasses_g_4528.jpg',
    'https://static1.lenskart.com/media/catalog/product/cache/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//f/a/fallon-colby-fc-e11874-round-full-rim-c2-eyeglasses_fallon-colby-fc-e11874-round-full-rim-c2-eyeglasses_g_4576_1.jpg',
    'https://static1.lenskart.com/media/catalog/product/cache/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-black-vc-e10117-c3-eyeglasses_vincent-chase-black-vc-e10117-c3-eyeglasses_m_4155_1_1.jpg',
    'https://static2.lenskart.com/media/catalog/product/cache/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e10363-c1-eyeglasses_vincent-chase-vc-e10363-c1-eyeglasses__j_5235_1_1__1.jpg',
    'https://static1.lenskart.com/media/catalog/product/cache/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//f/a/fallon-colby-fc-e11874-round-full-rim-c3-eyeglasses_fallon-colby-fc-e11874-round-full-rim-c3-eyeglasses_g_4486.jpg',
    'https://static.lenskart.com/media/catalog/product/cache/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//f/a/fallon-colby-fc-e11875-wayfarer-full-rim-c1-eyeglasses_fallon-colby-fc-e11875-wayfarer-full-rim-c1-eyeglasses_g_4536.jpg',
    'https://static2.lenskart.com/media/catalog/product/cache/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-matte-black-blue-air-vc-2251-c2-eyeglasses_vincent-chase-matte-black-blue-air-vc-2251-c2-eyeglasses_m_4086_1_1.jpg',
    'https://static1.lenskart.com/media/catalog/product/cache/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//f/a/fallon-colby-fc-e12086-c4-eyeglasses_fallon-colby-fc-e12086-c4-eyeglasses_g_8645.jpg',
    'https://static1.lenskart.com/media/catalog/product/cache/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//f/a/fallon-colby-full-rim-fc-e12090-c1-eyeglasses_fallon-colby-full-rim-fc-e12090-c1-eyeglasses_G_0769.jpg'
]
for (let x = 0; x < glasses.length; x++) {
    const glassimage = img[x];
    glassimage.setAttribute('src',frontPose[x]);
    glassimage.addEventListener('mouseenter',() =>{
        glassimage.setAttribute('src',sidePose[x])
    })
    glassimage.addEventListener('mouseleave',() =>{
        glassimage.setAttribute('src',frontPose[x])
    })
}
let scrollUp = document.querySelector('.scrollUp');
let pokewhite = 'https://img.icons8.com/ios/50/000000/up-arrow.png';
let pokeblack = 'https://img.icons8.com/ios-filled/50/000000/up-arrow.png';

scrollUp.setAttribute('src',pokewhite);
scrollUp.addEventListener('mouseenter',() =>{
    scrollUp.setAttribute('src',pokeblack);
})
scrollUp.addEventListener('mouseleave',() =>{
    scrollUp.setAttribute('src',pokewhite);
})
scrollUp.addEventListener('click',() =>{
    window.scrollTo(0,0);
})