import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/site-shell";
import { AppErrorComponent } from "@/lib/error-component";
import appCss from "../styles.css?url";

const APP_NAME = "Gramática";
const SITE_BASE = import.meta.env.BASE_URL;
const IS_STATIC = import.meta.env.MODE === "github-pages";

const APP_DESC =
  "Довідник португальської граматики для україномовних. PT-BR і PT-PT, формули, приклади, типові помилки.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${APP_NAME} — португальська граматика українською` },
      { name: "description", content: APP_DESC },
      { name: "theme-color", content: "#1B4F72" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: `${SITE_BASE}favicon.svg` },
      { rel: "stylesheet", href: appCss },
      ...(IS_STATIC
        ? []
        : [
            { rel: "manifest", href: `${SITE_BASE}__grok/manifest.webmanifest` },
            { rel: "apple-touch-icon", href: `${SITE_BASE}__grok/icon-180.png` },
          ]),
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Literata:opsz,wght@7..72,500;7..72,600;7..72,700&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&display=swap",
      },
    ],
  }),
  errorComponent: AppErrorComponent,
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <html lang="uk" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <SiteShell>
          <Outlet />
        </SiteShell>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <div className="mx-auto max-w-lg py-16 text-center">
      <p className="font-mono text-sm text-azulejo">404</p>
      <h1 className="mt-2 font-display text-3xl">Сторінку не знайдено</h1>
      <p className="mt-3 text-muted">
        Такої граматичної теми немає. Спробуйте пошук або перелік розділів.
      </p>
      <p className="mt-6">
        <a href={SITE_BASE} className="text-azulejo underline underline-offset-4">
          На головну
        </a>
        {" · "}
        <a href={`${SITE_BASE}pt`} className="text-azulejo underline underline-offset-4">
          Усі теми
        </a>
      </p>
    </div>
  );
}
