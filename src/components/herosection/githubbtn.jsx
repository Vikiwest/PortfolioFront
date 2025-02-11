import styled, { keyframes } from 'styled-components';

const chitchat = keyframes`
  0% { content: "#"; }
  5% { content: "."; }
  10% { content: "^{"; }
  15% { content: "-!"; }
  20% { content: "#$_"; }
  25% { content: "№:0"; }
  30% { content: "#{+."; }
  35% { content: "@}-?"; }
  40% { content: "?{4@%"; }
  45% { content: "=.,^!"; }
  50% { content: "?2@%"; }
  55% { content: "\\;1}]"; }
  60% { content: "?{%:%"; right: 0; }
  65% { content: "|{f[4"; right: 0; }
  70% { content: "{4%0%"; right: 0; }
  75% { content: "'1_0<"; right: 0; }
  80% { content: "{0%"; right: 0; }
  85% { content: "]>'"; right: 0; }
  90% { content: "4"; right: 0; }
  95% { content: "2"; right: 0; }
  100% { content: ""; right: 0; }
`;

const UIButton = styled.button`
  --btn-default-bg: rgb(41, 41, 41);
  // --btn-padding: 10.666px 20px;
  --btn-hover-bg: rgb(51, 51, 51);
  --btn-transition: 0.3s;
  --btn-letter-spacing: 0.1rem;
  --btn-animation-duration: 1.2s;
  --btn-shadow-color: rgba(0, 0, 0, 0.137);
  --btn-shadow: 0 2px 10px 0 var(--btn-shadow-color);
  --hover-btn-color: #FAC921;
  --default-btn-color: #fff;
  --font-size: 16px;
  --font-weight: 600;
  --font-family: Menlo, Roboto Mono, monospace;

  box-sizing: border-box;
  padding: var(--btn-padding);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--default-btn-color);
  font: var(--font-weight) var(--font-size) var(--font-family);
  background: var(--btn-default-bg);
  // border-radius: 15px;
  cursor: pointer;
  transition: var(--btn-transition);
  overflow: hidden;
  box-shadow: var(--btn-shadow);

  span {
    letter-spacing: var(--btn-letter-spacing);
    transition: var(--btn-transition);
    box-sizing: border-box;
    position: relative;
    background: inherit;

    &::before {
      box-sizing: border-box;
      position: absolute;
      content: '';
      background: inherit;
    }
  }

  &:hover,
  &:focus {
    background: var(--btn-hover-bg);

    span {
      color: var(--hover-btn-color);

      &::before {
        animation: ${chitchat} linear both var(--btn-animation-duration);
      }
    }
  }
`;

export default function App() {
  return (
    <div>
      <a href="https://github.com/Vikiwest" target="_blank" rel="noopener noreferrer">
        <UIButton className='w-28 h-10 rounded-lg'>
          <span >GitHub</span>
        </UIButton>
      </a>
    </div>
  );
}

  // <button className='github-btn border-2 bg-white w-28 h-10 rounded-lg text-lg'>GitHub</button>