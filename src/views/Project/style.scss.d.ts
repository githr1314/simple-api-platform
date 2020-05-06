declare namespace StyleScssModule {
  export interface IStyleScss {
    addBar: string;
    delete: string;
    des: string;
    project: string;
    projectContent: string;
    projectList: string;
    title: string;
  }
}

declare const StyleScssModule: StyleScssModule.IStyleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleScssModule.IStyleScss;
};

export = StyleScssModule;
