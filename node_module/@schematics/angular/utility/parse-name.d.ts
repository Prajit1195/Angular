/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { Path } from '@angular-devkit/core';
export interface Location {
    name: string;
    path: Path;
}
export declare function parseName(path: string, name: string): Location;
