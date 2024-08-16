anime({
  targets: '#square',
  rotate: '1turn',
  duration: 2000,
  loop: true,
  easing: 'linear'
});

document.getElementById('square').addEventListener('mouseenter', () => {
  anime({
      targets: '#square',
      borderRadius: ['0%', '50%'],
      duration: 500,
      easing: 'easeInOutQuad'
  });
});

document.getElementById('square').addEventListener('mouseleave', () => {
  anime({
      targets: '#square',
      borderRadius: ['50%', '0%'],
      duration: 500,
      easing: 'easeInOutQuad'
  });
});