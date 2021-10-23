    const bookMark = document.getElementById('buttonBook')
    const buttonBack = document.getElementById('buttonBack')
    const contButton = document.getElementsByClassName('contButton')
    const selectReward = document.getElementsByClassName('selectReward')
    const gotIt = document.getElementById('gotIt')
    const modalThanks = document.getElementById('modalThanks')
    const iconBook = document.getElementById('iconBookmark')
    const closeModal = document.getElementById('closeModal')
    const modalDefault = document.getElementById('modalDefault')
    const radioSelector = document.getElementsByClassName('radioSelector')
    const modalDefaultDiv = document.getElementsByClassName('modalDefaultDiv')
    const bottomDefaultDiv = document.getElementsByClassName('bottomDefaultDiv')
    const imgFondo = document.getElementById('fondoHeader')
    const nav = document.getElementById('nav')
    const menuMobile =document.getElementById('menu-mobile')
    var hash;
    viewSelect()


    menuMobile.addEventListener('click',function(){   // Menu-Mobile
      nav.classList.toggle('nav-visible')
    })

    window.addEventListener('resize', viewSelect)   // Event Resize Window
    
    function viewSelect(){     
      if(window.innerWidth<675){
        imgFondo.src = 'images/image-hero-mobile.jpg'
      }else{
        imgFondo.src = 'images/image-hero-desktop.jpg'
      }
    }

    bookMark.addEventListener('click', function () {      // Enabled/Dis Bookmark
      iconBook.classList.toggle('enabledBook')
      bookMark.classList.toggle('enabledBookButton')
    });

    buttonBack.addEventListener('click', function () {    // Button Back Project
      modalDefault.style.visibility = 'visible'
      nav.classList.remove('nav-visible')
    })

    for (let i = 0; i < contButton.length; i++) {         // Continue Button to => Modal Thanks
      contButton[i].addEventListener('click', function () {
        modalThanks.style.visibility = 'visible'
        modalDefault.style.visibility = 'hidden'
      })
    }

    for (let i = 0; i < selectReward.length; i++) {     //Button Select Reward
      selectReward[i].addEventListener('click', function (e) {
        modalDefault.style.visibility = 'visible'
        let j = 0;

        switch (e.target.id) {
          case 'first':
            j = 1
            hash = 'md1'
            break;
          case 'second':
            j = 2
            hash = 'md2'
            break;
        }

        for (let k = 0; k < radioSelector.length; k++) {
          if (k == j) {
            modalDefaultDiv[k].classList.add('modalDefaultDivActive')
            document.getElementById(hash).scrollIntoView()
            radioSelector[k].checked = true
          }
          else {
            modalDefaultDiv[k].classList.remove('modalDefaultDivActive')
          }
        }
      })
    }



    gotIt.addEventListener('click', () => {     // Button Get It! on Modal thanks.
      modalThanks.style.visibility = 'hidden'
    })

    closeModal.addEventListener('click', function () {  // Button Close on Modal Default.
      modalDefault.style.visibility = 'hidden'
    })

    for (let i = 0; i < radioSelector.length; i++) {      // Radio Button
      radioSelector[i].addEventListener('click', function (e) {
        let j = 0;
        switch (e.target.id) {
          case 'noReward':
            j = 0
            break;
          case 'bamboo':
            j = 1
            break;
          case 'blackEd':
            j = 2
            break;
          case 'moha':
            j = 3
            break;
        }

        for (let k = 0; k < radioSelector.length; k++) {
          if (k == j) {
            modalDefaultDiv[k].classList.add('modalDefaultDivActive')
          }
          else {
            modalDefaultDiv[k].classList.remove('modalDefaultDivActive')
            radioSelector[k].checked = false
          }
        }

      })
    }




