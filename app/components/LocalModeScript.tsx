export function LocalModeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){if(new URLSearchParams(location.search).get('local')==='1'){document.cookie='local=1;path=/;SameSite=Strict';document.documentElement.setAttribute('data-local','1');}})();`,
      }}
    />
  );
}
