declare namespace AddScssModule {
  export interface IAddScss {
    content: string;
  }
}

declare const AddScssModule: AddScssModule.IAddScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AddScssModule.IAddScss;
};

export = AddScssModule;
