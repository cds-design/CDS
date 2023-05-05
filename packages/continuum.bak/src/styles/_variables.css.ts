import { css } from "lit";

export default css`
  :host {
    /* TYPOGRAPHY */
    /* --font-size: calc(14px + (18 - 14) * ((100vw - 300px) / (1600 - 300))); */
    /* https://madebymike.com.au/writing/fluid-type-calc-examples/ */
    --font-size: clamp(100%, min(2vw, 1rem), 16px);
    /* https://css-tricks.com/simplified-fluid-typography/ */
    --font-family: inherit, system-ui, "Segoe UI", Roboto, Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    /* SPACING */
    --margin: 0.25em;
    --padding: 0.5em;
    --gap: 0.5em;
    --landscape-padding: var(--padding) calc(var(--padding) * 2);

    /* BORDERS */
    --circle-radius: 50vmax;
    --border-radius: 0.5em;
    --border-width: 0.1em;
    --border-color: rgba(var(--accent-rgb), var(--less-opaque));
    --border-color-active: rgba(var(--accent-rgb), var(--medium-opaque));
    --border: solid var(--border-color) var(--border-width);
    /* OPACITY */
    --opaque: 1;
    --less-opaque: 0.25;
    --medium-opaque: 0.5;
    --high-opaque: 0.75;
    --transparent: 0;

    /* COLORS */
    --ct-bg-rgb: 0, 255, 215;

    --bg-rgb: var(--ct-bg-rgb);
    --accent-rgb: var(--bg-rgb);
    --accent: rgb(var(--bg-rgb));

    --ct-color-rgb: 255, 255, 255;

    --color-rgb: var(--ct-color-rgb);
    --color: rgb(var(--color-rgb));

    /* SHADOWS */
    --drop: drop-shadow(0 0 0.25em rgba(0, 0, 0, var(--medium-opaque)));

    /* TRANSITIONS */
    --duration: 0.4s;
    --easing-fn: ease;

    /* ASPECT RATIO */
    --square-aspect: 1;
    --rect-aspect: 2/1;

    /* BLUR */
    --blur: blur(0.5em);

    /* MISCELLANEOUS */
    --min-chars: 25ch;
    --max-chars: 50ch;

    --grain-img: url("data:image/webp;base64,UklGRvIDAABXRUJQVlA4WAoAAAAQAAAAQAAAQAAAQUxQSJ0DAAABF0CQbZviGMv2R0TgAVnZtinZ931kDCuNEmuVoWIeRYWJuSopGVYWJsNRVPRLukrpl2GVkmEdcUT/Y1Pug6if59r3new2ZxethRSqM9Zbyg1U8B8G10TzO9skqfHmOt91b+AwUzO6eSvbO/vip9YSVIxJVJ6pZcUQUZZDwOlmQcQnvsBXfHh+hw3gil9Li9SxqE+VJXOPoOhsGPs/zKQfPz2YiQqTXuydYDrMWsJEGEodkP7YwbM4qkGyp9gW2QPPIAzDBXSxE78acIs1FILVyQk0U2fqcJaob6jEn5nHUHF4L7TRbe2j088fHen2fTUNtPGz2ALjz+IRZQ57O2+Iaj8C+DatiNGmXzL2zXbnfWDsgmdCMpVIfDzlMEvRXBbH5SPCNOu5/3yeBMxI49V3Zg31VS/0nKdgmnd0CXDXhjlisUTdIZJa5PW8UKXjbZJZcxaSi+lJ0zjSxgxln3YCuLvb8t07qew+W6jU7wn+QEeZYe6dkDqmP3jn4Cr5KgWit1icuKH4sFFv7U+igYrr4gukzMsEB8yMZpajY3zxFfZJAUfOahLlr+02iZeWRhMg+qhdyh8dTrYVT+7aHFWvOGINmSnBIl8uzQRufNnoPcyK5qM5flEpGF6epdvUbe7OtTypxmCO5b12JvGdSPUYTNmAmr4ZNWfq6jJn78dJjdQbYfa0YHtMXUqZ5SkUDpdVFNp0pZZN5JQe6OjFMZ8ednlEimN/66L36DWsCSd0Djpgr9QXEcnF3/RuWVWsehvvwiJDrhSSpKlB+AzsLqkhiWF1dhxfKXtIErYJYGwxmfEg9+evq8P4YcJJKz901WfHaXxSdKMSEnVNdKKVyHzeZcs5NnBLy6ntTvhIsX5c2VLQxeAyO/z0t3+/V81yKXLMdSn9n1M8KJ9rS5AhWuGr7skpBkoT9WN9C4X/l4tbN70y/hLh0+yQ2UZlItJI/gXDdLG5odcHir+xmoSU6lbGCKBx1u80U4Hzuqyf1NcFaCbU9WLKaZy++F9yu8FQutLFdb50lxM0ZDMD4jF3TW/1js6Nh5h7X7h6t4tumBKtHEMP+uEjUp4lmeDm99F/bJL+AfS/zkN/CdteiAbfwBUQW/p4241nPHyTab6G8H4MFv6w2zkaC75p6An69Y+6xFnYYb/NHz3CBHN/UOOfTEWVb0sJvkO9NIkqKvK5HYX5cnKGWlm3swE2c1W8kl2Sgs7QJvaHAllAEp8jeQQAAFZQOCAuAAAAkAMAnQEqQQBBAD/9/v9/ghSAPwP4lpAAAJ8aNGjRo0aNGjRn4AD+5rUAAAAAAA==");
  }
`;
