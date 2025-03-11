export default function handler(req, res) {
    const imagekitEnv = process.env.IMAGEKIT_ENV || "w3teal";
    const imagekitHost = `https://ik.imagekit.io/${imagekitEnv}`;

    const imagekitPath = req.url.replace("/api", "");

    const imagekitUrl = `${imagekitHost}${imagekitPath}`;
    res.writeHead(307, { Location: imagekitUrl });
    res.end();
}
