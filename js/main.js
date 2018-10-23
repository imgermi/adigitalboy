var wordsHero = ['Alejandro Aboy', 'A digital boy'],
    wordWrapperHero = document.getElementById('titleAnim'),
    wordWrapperHeroContent = wordWrapperHero.innerHTML,
    addingWordHero = false,
    counterHero = 1;

setInterval(function(){

  if(wordWrapperHeroContent.length > 0 && !addingWordHero ) {
    wordWrapperHero.innerHTML = wordWrapperHeroContent.slice(0, -1);
    wordWrapperHeroContent = wordWrapperHero.innerHTML;
  } else {
    addingWordHero = true;
  }

  if( addingWordHero ){
    if( wordWrapperHeroContent.length < wordsHero[counterHero].length  ) {
      wordWrapperHero.innerHTML = wordsHero[counterHero].slice(0, wordWrapperHeroContent.length + 1);
      wordWrapperHeroContent = wordWrapperHero.innerHTML;
    } else {
      if( counterHero < wordsHero.length) {
        counterHero ++
      }
      addingWordHero = false;
    }
  }

  if( counterHero == wordsHero.length) {
    counterHero = 0;
  }

}, 120);

var wordsIntro = ['Hola.', 'Un gusto.', '¿Quién es este sujeto?'],
    wordWrapperIntro = document.getElementById('introAnim'),
    wordWrapperIntroContent = wordWrapperIntro.innerHTML,
    addingWordIntro = false,
    counterIntro = 1;

setInterval(function(){

  if(wordWrapperIntroContent.length > 0 && !addingWordIntro ) {
    wordWrapperIntro.innerHTML = wordWrapperIntroContent.slice(0, -1);
    wordWrapperIntroContent = wordWrapperIntro.innerHTML;
  } else {
    addingWordIntro = true;
  }

  if( addingWordIntro ){
    if( wordWrapperIntroContent.length < wordsIntro[counterIntro].length  ) {
      wordWrapperIntro.innerHTML = wordsIntro[counterIntro].slice(0, wordWrapperIntroContent.length + 1);
      wordWrapperIntroContent = wordWrapperIntro.innerHTML;
    } else {
      if( counterIntro < wordsIntro.length) {
        counterIntro ++
      }
      addingWordIntro = false;
    }
  }

  if( counterIntro == wordsIntro.length) {
    counterIntro = 0;
  }

}, 120);

var wordsTrabajos = ['Trabajos.', 'Experiencias.', 'Algunos proyectos.'],
    wordWrapperTrabajos = document.getElementById('trabajosAnim'),
    wordWrapperTrabajosContent = wordWrapperTrabajos.innerHTML,
    addingWordTrabajos = false,
    counterTrabajos = 1;

setInterval(function(){

  if(wordWrapperTrabajosContent.length > 0 && !addingWordTrabajos ) {
    wordWrapperTrabajos.innerHTML = wordWrapperTrabajosContent.slice(0, -1);
    wordWrapperTrabajosContent = wordWrapperTrabajos.innerHTML;
  } else {
    addingWordTrabajos = true;
  }

  if( addingWordTrabajos ){
    if( wordWrapperTrabajosContent.length < wordsTrabajos[counterTrabajos].length  ) {
      wordWrapperTrabajos.innerHTML = wordsTrabajos[counterTrabajos].slice(0, wordWrapperTrabajosContent.length + 1);
      wordWrapperTrabajosContent = wordWrapperTrabajos.innerHTML;
    } else {
      if( counterTrabajos < wordsTrabajos.length) {
        counterTrabajos ++
      }
      addingWordTrabajos = false;
    }
  }

  if( counterTrabajos == wordsTrabajos.length) {
    counterTrabajos = 0;
  }

}, 120);

var wordsBlog = ['Blog.', 'Contenidos.', 'A veces escribo.'],
    wordWrapperBlog = document.getElementById('blogAnim'),
    wordWrapperBlogContent = wordWrapperBlog.innerHTML,
    addingWordBlog = false,
    counterBlog = 1;

setInterval(function(){

  if(wordWrapperBlogContent.length > 0 && !addingWordBlog ) {
    wordWrapperBlog.innerHTML = wordWrapperBlogContent.slice(0, -1);
    wordWrapperBlogContent = wordWrapperBlog.innerHTML;
  } else {
    addingWordBlog = true;
  }

  if( addingWordBlog ){
    if( wordWrapperBlogContent.length < wordsBlog[counterBlog].length  ) {
      wordWrapperBlog.innerHTML = wordsBlog[counterBlog].slice(0, wordWrapperBlogContent.length + 1);
      wordWrapperBlogContent = wordWrapperBlog.innerHTML;
    } else {
      if( counterBlog < wordsBlog.length) {
        counterBlog ++
      }
      addingWordBlog = false;
    }
  }

  if( counterBlog == wordsBlog.length) {
    counterBlog = 0;
  }

}, 120);

var wordsContacto = ['Charlemos cuando quieras.', 'Salvo que envíes audios de más de 3 minutos.', 'Por favor, eso no.'],
    wordWrapperContacto = document.getElementById('contactoAnim'),
    wordWrapperContactoContent = wordWrapperContacto.innerHTML,
    addingWordContacto = false,
    counterContacto = 1;

setInterval(function(){

  if(wordWrapperContactoContent.length > 0 && !addingWordContacto ) {
    wordWrapperContacto.innerHTML = wordWrapperContactoContent.slice(0, -1);
    wordWrapperContactoContent = wordWrapperContacto.innerHTML;
  } else {
    addingWordContacto = true;
  }

  if( addingWordContacto ){
    if( wordWrapperContactoContent.length < wordsContacto[counterContacto].length  ) {
      wordWrapperContacto.innerHTML = wordsContacto[counterContacto].slice(0, wordWrapperContactoContent.length + 1);
      wordWrapperContactoContent = wordWrapperContacto.innerHTML;
    } else {
      if( counterContacto < wordsContacto.length) {
        counterContacto ++
      }
      addingWordContacto = false;
    }
  }

  if( counterContacto == wordsContacto.length) {
    counterContacto = 0;
  }

}, 120);