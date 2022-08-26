import {Component, OnInit} from '@angular/core';

// export function unescapeHtml(text: string): string {
//   const unescapedText: { [char: string]: string } = {
//     '&a;': '&',
//     '&q;': '"',
//     '&s;': "'",
//     '&l;': '<',
//     '&g;': '>',
//   };
//   return text.replace(/&[^;]+;/g, (s) => unescapedText[s]);
// }
//
// export function escapeHtml(text: string): string {
//   const escapedText: { [char: string]: string } = {
//     '&': '&a;',
//     '"': '&q;',
//     "'": '&s;',
//     '<': '&l;',
//     '>': '&g;',
//   };
//   return text.replace(/[&"'<>]/g, (s) => escapedText[s]);
// }


export interface DialogContext {
  eServiceId: string;
  dialogId: string;
  microfrontend?: boolean;
}


@Component({
  selector: 'app-schenker-tests',
  templateUrl: './schenker-tests.component.html',
  styleUrls: ['./schenker-tests.component.css']
})
export class SchenkerTestsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  //
  //
  // async login(forceRedirect?: DialogContext, params?: Record<string, string>) {
  //   // const {loginRedirectDialog} = this.#settingsController.current;
  //   const redirect = this.dialogContext;
  //
  //   if (!redirect) {
  //     throw new Error(`Cannot determine the redirect.`);
  //   }
  //
  //   // this.#scheduler.track(async () => {
  //   const redirectUrl = await this.createLoginUrl(
  //     redirect,
  //     new URLSearchParams(params ?? window.location.search),
  //   );
  //   // const token = await this.#preRegistrationService.call('schedulePreRegistrationCall', [redirectUrl]);
  //   // redirectUrl.searchParams.set('reg_data', token);
  //   debugger;
  //   window.location.assign(redirectUrl);
  //   // });
  // }
  //
  // async createLoginUrl(redirect: DialogContext, redirectParams: URLSearchParams): Promise<URL> {
  //   const currentSearchParams = new URLSearchParams(window.location.search);
  //   const url = new URL('/nges-portal/api/login', window.location.origin);
  //
  //   // url.searchParams.set('client_id', this.#clientId);
  //   // url.searchParams.set('kc_locale', this.#cookieParser.languageCode); // TODO: kann lagnuageCode im Cache gesetzt werden von Angreifer?
  //   // url.searchParams.set('type', this.#shellStateParser.get('appTemplate')?.registrationType ?? 'customer');
  //   // url.searchParams.set('microfrontend', 'true');
  //
  //   if (currentSearchParams.has('shell-user-group-id')) {
  //     url.searchParams.set('user_group_id', currentSearchParams.get('shell-user-group-id') as string);
  //   }
  //
  //   const targetUrl = new URL(await this.dialogContextAsString(redirect), window.location.origin);
  //   redirectParams.forEach((value, key) => targetUrl.searchParams.set(key, value));
  //   targetUrl.searchParams.delete('shell-user-group-id');
  //   url.searchParams.set('targetUrl', targetUrl.pathname.concat(targetUrl.search));
  //
  //   return url;
  // }
  //
  // get dialogContext() {
  //   return this.urlAsDialogContext(new URL(window.location.href));
  // }
  //
  // urlAsDialogContext(url: URL): DialogContext | undefined {
  //   const m = /^\/app\/([^/]+)\/?([^?#]*)/.exec(url.pathname);
  //   return m ? {eServiceId: m[1], dialogId: m[2], microfrontend: true} : undefined;
  // }
  //
  // /** Creates a Microfrontend URL, starting with /app. */
  // async dialogContextAsString(dialogContext: DialogContext): Promise<string> {
  //   const urlElements = ['/app'];
  //   const isMicrofrontend = /**
  //    dialogContext.microfrontend ?? (await this.#appRegistry?.call('isMicrofrontend', [dialogContext.eServiceId])) ?? **/ true;
  //
  //   if (!isMicrofrontend) {
  //     urlElements.push('nges-portal');
  //   }
  //
  //   urlElements.push(dialogContext.eServiceId);
  //
  //   if (dialogContext.dialogId?.length > 0) {
  //     urlElements.push(dialogContext.dialogId);
  //   }
  //
  //   return urlElements.join('/');
  // }
}
