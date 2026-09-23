// Native details/navigation and all lesson content still work without JavaScript.
const navigation = document.getElementById('navigation');
if (navigation && window.matchMedia('(max-width: 900px)').matches) {
  navigation.open = false;
}
