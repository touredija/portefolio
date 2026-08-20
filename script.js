// menu mobile
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
 
  // intitulé animé (effet machine à écrire)
  const roles = ["Community Manager", "Créatrice de contenus digitaux", "Stratège réseaux sociaux", "Ex-finance, reconvertie au digital"];
  const roleEl = document.getElementById('typed-role');
  let ri = 0, ci = 0, deleting = false;
 
  function typeLoop(){
    const current = roles[ri];
    if(!deleting){
      ci++;
      if(ci > current.length){ deleting = true; setTimeout(typeLoop, 1400); return; }
    } else {
      ci--;
      if(ci < 0){ deleting = false; ri = (ri+1) % roles.length; ci = 0; }
    }
    roleEl.innerHTML = current.slice(0, ci) + '<span class="cursor">&nbsp;</span>';
    setTimeout(typeLoop, deleting ? 35 : 65);
  }
  typeLoop();
 
  // reveal au scroll
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:0.15});
  revealEls.forEach(el => io.observe(el));
 
  // année automatique
  document.getElementById('year').textContent = new Date().getFullYear();
 
  // formulaire de contact -> mailto:
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('cf-name').value;
    const email = document.getElementById('cf-email').value;
    const subject = document.getElementById('cf-subject').value;
    const message = document.getElementById('cf-message').value;
 
    const body = `Nom : ${name}\nEmail : ${email}\n\n${message}`;
    const mailtoLink = `mailto:touredija98@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
 
    window.location.href = mailtoLink;
    formMsg.textContent = "Votre client email va s'ouvrir avec le message pré-rempli.";
  });
 
