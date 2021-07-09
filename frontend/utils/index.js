import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

export function nonBrowser() {
  return typeof window === 'undefined';
}

export function scrollToTop() {
  scroll.scrollToTop({ duration: 100 });
}

export function scrollToSpecific(place) {
  return (
    <Link
      style={{ margin: '0 15px 0 15px', cursor: 'pointer' }}
      className=' text-decoration-none'
      to={`${place}`}
    >
      <h5>{place}</h5>
    </Link>
  );
}

export function scrollToBottom() {
  scroll.scrollToBottom({ duration: 100 });
}
