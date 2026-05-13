export function LocalModeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){if(new URLSearchParams(location.search).get('global')==='1'){document.cookie='global=1;path=/;SameSite=Strict';document.documentElement.removeAttribute('data-local');}})();`,
      }}
    />
  );
}
