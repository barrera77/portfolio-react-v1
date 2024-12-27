import { TextureLoader } from "three";

export const loadTexture = async (url) => {
  return new Promise((resolve, reject) => {
    const loader = new TextureLoader();
    loader.load(
      url,
      (texture) => resolve(texture),
      undefined,
      (error) => reject(error)
    );
  });
};

/* // Usage
const [texture, setTexture] = React.useState(null);

React.useEffect(() => {
  loadTexture("https://example.com/image.png")
    .then((tex) => setTexture(tex))
    .catch((err) => console.error("Failed to load texture:", err));
}, []); */
