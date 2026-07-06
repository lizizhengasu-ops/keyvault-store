import os
path = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\animations.tsx'
with open(path, 'rb') as f:
    c = f.read()

# Make hero more Apple-like: slightly slower, more deliberate
c = c.replace(b'gsap.from(\'.hero-title\', {y:80,opacity:0,duration:1.2,ease:\'expo.out\',delay:0.15});',
             b'gsap.from(\'.hero-title\', {y:80,opacity:0,duration:1.5,ease:\'expo.out\',delay:0.15});')
c = c.replace(b'gsap.from(\'.hero-subtitle\', {y:40,opacity:0,duration:1,ease:\'expo.out\',delay:0.4});',
             b'gsap.from(\'.hero-subtitle\', {y:40,opacity:0,duration:1.2,ease:\'expo.out\',delay:0.4});')
c = c.replace(b'gsap.from(\'.hero-cta\', {y:30,opacity:0,duration:0.8,ease:\'power3.out\',delay:0.7,scale:0.95});',
             b'gsap.from(\'.hero-cta\', {y:30,opacity:0,duration:1,ease:\'power3.out\',delay:0.7,scale:0.96});')

# Apple uses subtle scale entrance for sections
c = c.replace(b'gsap.from(\'.scale-in\', {scale:0.96,opacity:0,duration:0.7,ease:\'power2.out\',scrollTrigger:{trigger:\'.scale-in\',start:\'top 85%\'}});',
             b'gsap.from(\'.scale-in\', {scale:0.98,opacity:0,duration:0.8,ease:\'power3.out\',scrollTrigger:{trigger:\'.scale-in\',start:\'top 85%\'}});')

# Stagger improvements - more spacing between items (Apple staggered entrance feel)
c = c.replace(b'stagger:0.08,duration:0.7,ease:\'power3.out\'',
             b'stagger:0.1,duration:0.7,ease:\'power3.out\'')
c = c.replace(b'stagger:0.06,duration:0.5,ease:\'power2.out\'',
             b'stagger:0.08,duration:0.6,ease:\'power2.out\'')

with open(path, 'wb') as f:
    f.write(c)
print('Animations enhanced - Apple-like easing & timing')