function RenderHtmlRichText({ content }) {
  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
}

export default RenderHtmlRichText;
