// Save this file as 'logo.js' on your GitHub Pages
class IqLogo extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .logo-wrapper {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    padding: 8px 16px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 12px;
                    font-family: system-ui, sans-serif;
                }
                .logo-mark {
                    position: relative;
                    width: 35px;
                    height: 35px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .cube-shards {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border: 1.5px dashed rgba(79, 172, 254, 0.6);
                    border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
                    animation: float 8s linear infinite;
                }
                .core {
                    width: 14px;
                    height: 14px;
                    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                    border-radius: 50%;
                    box-shadow: 0 0 12px #00f2fe;
                }
                .logo-text { display: flex; flex-direction: column; }
                .main-title { font-size: 18px; font-weight: 900; color: #ffffff; }
                .main-title span { background: linear-gradient(135deg, #4facfe, #00f2fe); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 300; }
                .sub-title { font-size: 6px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #94a3b8; }
                @keyframes float { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            </style>
            <div class="logo-wrapper">
                <div class="logo-mark">
                    <div class="cube-shards"></div>
                    <div class="core"></div>
                </div>
                <div class="logo-text">
                    <div class="main-title">IQ <span>CLASSES</span></div>
                    <div class="sub-title">Future Paradigm</div>
                </div>
            </div>
        `;
    }
}
customElements.define('iq-logo', IqLogo);
