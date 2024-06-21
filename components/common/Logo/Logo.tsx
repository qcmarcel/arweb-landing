

interface Props {
  width?: number;
  height?: number;
  text: boolean;
  monochrome?: boolean;
}

function Logo({ text, monochrome, width = 200, height = 55 }: Props) {
  let fill1 = monochrome ? "#fff" : "#0C1C47";
  let fill2 = monochrome ? "#fff" : "#00A8E1";
  //when you have the logo loose add the function to switch between logo with and without text
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={text ? width : width}
      height={height}
      fill="none"
      viewBox={text ? `0 0 185 50` : "0 0 50 50"}
    >
      <path
        fill={fill1}
        d="M67.76 40.4c-1.76 0-3.347-.48-4.76-1.44-1.413-.96-2.533-2.267-3.36-3.92s-1.24-3.547-1.24-5.68c0-2.133.413-4.013 1.24-5.64.853-1.653 2-2.947 3.44-3.88 1.44-.96 3.08-1.44 4.92-1.44 1.04 0 1.987.16 2.84.48.88.293 1.64.707 2.28 1.24a7.844 7.844 0 011.68 1.84 6.95 6.95 0 01.96 2.24l-1.2-.2v-5.16h5.64V40h-5.72v-5.08l1.28-.12a6.817 6.817 0 01-1.04 2.12 8.226 8.226 0 01-1.8 1.8 9.44 9.44 0 01-2.36 1.24c-.88.293-1.813.44-2.8.44zm1.56-4.92c1.067 0 2-.253 2.8-.76.8-.507 1.413-1.213 1.84-2.12.453-.933.68-2.013.68-3.24 0-1.2-.227-2.253-.68-3.16-.427-.907-1.04-1.613-1.84-2.12-.8-.533-1.733-.8-2.8-.8-1.04 0-1.96.267-2.76.8-.773.507-1.387 1.213-1.84 2.12-.453.907-.68 1.96-.68 3.16 0 1.227.227 2.307.68 3.24.453.907 1.067 1.613 1.84 2.12.8.507 1.72.76 2.76.76zM85.895 40V18.84h5.48l.2 6.8-.96-1.4c.32-1.093.84-2.08 1.56-2.96.72-.907 1.56-1.613 2.52-2.12a6.659 6.659 0 013.08-.76c.453 0 .893.04 1.32.12.426.08.786.173 1.08.28l-1.52 6.24a5.342 5.342 0 00-1.16-.4c-.454-.133-.92-.2-1.4-.2-.64 0-1.24.12-1.8.36-.534.213-1 .533-1.4.96-.4.4-.72.88-.96 1.44a5.129 5.129 0 00-.32 1.84V40h-5.72zm24.371 0l-7.08-21.16h5.92l4.32 14.4-.88-.12 4.76-11.24h3.36l4.96 11.28-.96.08 4.32-14.4h5.92l-7.2 21.16h-4.12l-5-12.04.64.08-4.88 11.96h-4.08zm37.544.4c-2.294 0-4.294-.467-6-1.4-1.707-.933-3.04-2.213-4-3.84-.96-1.627-1.44-3.493-1.44-5.6 0-1.627.266-3.12.8-4.48.533-1.36 1.28-2.533 2.24-3.52a9.65 9.65 0 013.4-2.32c1.333-.56 2.773-.84 4.32-.84 1.44 0 2.773.267 4 .8a8.78 8.78 0 013.16 2.2c.906.933 1.6 2.04 2.08 3.32.48 1.28.693 2.68.64 4.2l-.04 1.76h-17l-.92-3.48h13.24l-.64.72v-.88a3.752 3.752 0 00-.72-1.96c-.4-.587-.92-1.04-1.56-1.36-.64-.32-1.36-.48-2.16-.48-1.174 0-2.174.227-3 .68-.8.453-1.414 1.12-1.84 2-.427.88-.64 1.947-.64 3.2 0 1.28.266 2.387.8 3.32a5.943 5.943 0 002.32 2.2c1.013.507 2.2.76 3.56.76.933 0 1.786-.147 2.56-.44.773-.293 1.6-.8 2.48-1.52l2.72 3.8a12.151 12.151 0 01-2.56 1.76c-.934.453-1.894.8-2.88 1.04-.987.24-1.96.36-2.92.36zm25.597 0c-.933 0-1.84-.133-2.72-.4a9.83 9.83 0 01-2.4-1.08 8.118 8.118 0 01-1.8-1.6c-.48-.613-.786-1.24-.92-1.88l1.28-.48-.28 4.96h-5.36V10.4h5.68v13.4l-1.08-.44c.16-.64.467-1.253.92-1.84a6.62 6.62 0 011.72-1.6 8.662 8.662 0 012.28-1.12c.827-.267 1.68-.4 2.56-.4 1.84 0 3.48.48 4.92 1.44 1.44.933 2.574 2.227 3.4 3.88.854 1.653 1.28 3.547 1.28 5.68 0 2.133-.413 4.027-1.24 5.68-.826 1.653-1.96 2.96-3.4 3.92-1.413.933-3.026 1.4-4.84 1.4zm-1.36-4.84c1.067 0 1.987-.253 2.76-.76.8-.533 1.427-1.253 1.88-2.16.454-.933.68-2.013.68-3.24 0-1.2-.226-2.267-.68-3.2-.426-.933-1.04-1.653-1.84-2.16-.8-.507-1.733-.76-2.8-.76-1.066 0-2 .253-2.8.76-.8.507-1.426 1.227-1.88 2.16-.453.933-.68 2-.68 3.2 0 1.227.227 2.307.68 3.24.454.907 1.08 1.627 1.88 2.16.8.507 1.734.76 2.8.76zM7.08 24.05a1 1 0 010-1.414l9.9-9.9a1 1 0 011.413 0l4.95 4.95L12.03 29l-4.95-4.95z"
      ></path>

      <path
        fill={fill2}
        d="M24.05 18.393a1 1 0 010-1.414l4.243-4.242a1 1 0 011.414 0l4.243 4.242a1 1 0 010 1.414l-4.243 4.243a1 1 0 01-1.414 0l-4.243-4.243z"
      ></path>
      <path
        fill={fill1}
        d="M45.97 29L34.658 17.686l4.95-4.95a1 1 0 011.414 0l9.9 9.9a1 1 0 010 1.414L45.97 29z"
      ></path>
      <path
        fill={fill2}
        d="M50.92 33.95a1 1 0 010 1.414l-9.9 9.9a1 1 0 01-1.413 0l-4.95-4.95L45.97 29l4.95 4.95z"
      ></path>
      <path
        fill={fill1}
        d="M33.95 39.607a1 1 0 010 1.414l-4.243 4.242a1 1 0 01-1.414 0l-4.243-4.242a1 1 0 010-1.414l4.243-4.243a1 1 0 011.414 0l4.243 4.243z"
      ></path>
      <path
        fill={fill2}
        d="M12.03 29l11.313 11.314-4.95 4.95a1 1 0 01-1.414 0l-9.9-9.9a1 1 0 010-1.414L12.03 29z"
      ></path>
    </svg>
  );
}

export default Logo;
