/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { BuilderContext, BuilderOutput } from '@angular-devkit/architect';
import type { ConfigOptions } from 'karma';
import { Observable } from 'rxjs';
import { Configuration } from 'webpack';
import { ExecutionTransformer } from '../../transforms';
import { Schema as KarmaBuilderOptions } from './schema';
export type KarmaConfigOptions = ConfigOptions & {
    buildWebpack?: unknown;
    configFile?: string;
};
/**
 * @experimental Direct usage of this function is considered experimental.
 */
export declare function execute(options: KarmaBuilderOptions, context: BuilderContext, transforms?: {
    webpackConfiguration?: ExecutionTransformer<Configuration>;
    karmaOptions?: (options: KarmaConfigOptions) => KarmaConfigOptions;
}): Observable<BuilderOutput>;
export type { KarmaBuilderOptions };
declare const _default: import("@angular-devkit/architect").Builder<Record<string, string> & KarmaBuilderOptions & import("@angular-devkit/core").JsonObject>;
export default _default;
