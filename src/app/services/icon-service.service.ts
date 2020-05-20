import { Injectable } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Injectable({
  providedIn: 'root'
})
export class IconServiceService {
  faCoffee = faCoffee;
  faFacebook = faFacebook;
  faGithub =  faGithub ;
  faTwitter = faTwitter;
  faEnvelope = faEnvelope;
  faSpinner = faSpinner;
  faCircleNotch = faCircleNotch;
  faSearch = faSearch;
  constructor() { }
}
