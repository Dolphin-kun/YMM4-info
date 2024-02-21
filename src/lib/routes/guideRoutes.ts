import { Routes } from './type';

export const guideRoutes: Routes = [
  {
    label: 'YMM4情報サイトとは',
    path: '/guide/overview',
  },
  {
    label: 'YMM4とは',
    pages: [
      {
        label: '概要',
        path: '/guide/YMM4/overview',
      },
      {
        label: '導入方法',
        path: '/guide/YMM4/start-up',
      },
    ],
  },
  {
    label: '基本機能',
    pages: [
      {
        label: '基本的な操作',
        path: '/guide/' + encodeURIComponent("基本機能") + '/operation',
      },
      {
        label: 'エフェクトアイテムの使い方',
        path: '/guide/' + encodeURIComponent("基本機能") + '/effect-item',
      },
      {
        label: 'a',
        path: '/',
        subPages: [
          {
            label: 'home',
            path: '/'
          }
        ]
      }
    ],
  },
  {
    label: '映像エフェクト',
    path: '/guide/Effects/overview',
  },
  {
    label: 'アニメーション',
    pages: [
      { 
        label: 'グリッチノイズ（帯）', 
        path: '/guide/Effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("グリッチノイズ（帯）"),
      },
      { 
        label: 'ランダム移動', 
        path: '/guide/Effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("ランダム移動"),
      },
      { 
        label: 'ランダム回転', 
        path: '/guide/Effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("ランダム回転"),
      },
      { 
        label: 'ランダム拡大縮小', 
        path: '/guide/Effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("ランダム拡大縮小"),
      },
      { 
        label: 'ランダム傾斜変形', 
        path: '/guide/Effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("ランダム傾斜変形"),
      },
      { 
        label: 'ランダム透過', 
        path: '/guide/Effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("ランダム透過"),
      },
      { 
        label: '砕け散る', 
        path: '/guide/Effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("砕け散る"),
      },
      { 
        label: '跳ねる', 
        path: '/guide/Effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("跳ねる"),
      },
      { 
        label: '波打ち', 
        path: '/guide/Effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("波打ち"),
      },
      { 
        label: '波紋', 
        path: '/guide/Effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("波紋"),
      },
      { 
        label: '反復移動', 
        path: '/guide/Effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("反復移動"),
      },
      { 
        label: '反復回転', 
        path: '/guide/Effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("反復回転"),
      },
      { 
        label: '反復拡大縮小', 
        path: '/guide/Effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("反復拡大縮小"),
      },
      { 
        label: '反復傾斜変形', 
        path: '/guide/Effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("反復傾斜変形"),
      },
      { 
        label: '反復透過', 
        path: '/guide/Effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("反復透過"),
      },
    ],
  },
  {
    label: 'カメラ',
    pages: [
      { 
        label: 'カメラ位置', 
        path: '/guide/Effects/'+encodeURIComponent("カメラ")+'/'+encodeURIComponent("カメラ位置"),
      },
      { 
        label: '回り込みカメラ', 
        path: '/guide/Effects/'+encodeURIComponent("カメラ")+'/'+encodeURIComponent("回り込みカメラ"),
      },
      { 
        label: '注目カメラ', 
        path: '/guide/Effects/'+encodeURIComponent("カメラ")+'/'+encodeURIComponent("注目カメラ"),
      },
    ],
  },
  {
    label: '加工',
    pages: [
      { 
        label: 'ガンマ補正', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("ガンマ補正"),
      },
      { 
        label: 'グラデーション', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("グラデーション"),
      },
      { 
        label: 'シャープ化', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("シャープ化"),
      },
      { 
        label: 'セピア', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("セピア"),
      },
      { 
        label: 'ディスプレイスメントマップ', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("ディスプレイスメントマップ"),
      },
      { 
        label: 'ノイズ', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("ノイズ"),
      },
      { 
        label: 'ノイズ色ずれ', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("ノイズ色ずれ"),
      },
      { 
        label: 'ノイズ歪み', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("ノイズ歪み"),
      },
      { 
        label: 'ハイライトとシャドー', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("ハイライトとシャドー"),
      },
      { 
        label: 'ぼかし', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("ぼかし"),
      },
      { 
        label: 'モザイク', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("モザイク"),
      },
      { 
        label: '回転ブラー', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("回転ブラー"),
      },
      { 
        label: '角丸め', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("角丸め"),
      },
      { 
        label: '境界ぼかし', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("境界ぼかし"),
      },
      { 
        label: '色ズレ', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("色ズレ"),
      },
      { 
        label: '色収差', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("色収差"),
      },
      { 
        label: '色調補正', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("色調補正"),
      },
      { 
        label: '色反転', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("色反転"),
      },
      { 
        label: '色味調整', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("色味調整"),
      },
      { 
        label: '線形色変換', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("線形色変換"),
      },
      { 
        label: '単色化', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("単色化"),
      },
      { 
        label: '抽象化', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("抽象化"),
      },
      { 
        label: '二値化', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("二値化"),
      },
      { 
        label: '放射ブラー', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("放射ブラー"),
      },
      { 
        label: '放射光', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("放射光"),
      },
      { 
        label: '方向ブラー', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("方向ブラー"),
      },
      { 
        label: '網点', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("網点"),
      },
      { 
        label: '露光調整', 
        path: '/guide/Effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("露光調整"),
      },
    ],
  },
  {
    label: '合成',
    pages: [
      { 
        label: 'クリッピング', 
        path: '/guide/Effects/'+encodeURIComponent("合成")+'/'+encodeURIComponent("クリッピング"),
      },
      { 
        label: 'クロマキー', 
        path: '/guide/Effects/'+encodeURIComponent("合成")+'/'+encodeURIComponent("クロマキー"),
      },
      { 
        label: '減色', 
        path: '/guide/Effects/'+encodeURIComponent("合成")+'/'+encodeURIComponent("減色"),
      },
      { 
        label: '斜めクリッピング', 
        path: '/guide/Effects/'+encodeURIComponent("合成")+'/'+encodeURIComponent("斜めクリッピング"),
      },
      { 
        label: '図形切り抜き', 
        path: '/guide/Effects/'+encodeURIComponent("合成")+'/'+encodeURIComponent("図形切り抜き"),
      },
    ],
  },
    {
    label: '合成',
    pages: [
      { 
        label: 'クリッピング', 
        path: '/guide/Effects/'+encodeURIComponent("合成")+'/'+encodeURIComponent("クリッピング"),
      },
      { 
        label: 'クロマキー', 
        path: '/guide/Effects/'+encodeURIComponent("合成")+'/'+encodeURIComponent("クロマキー"),
      },
      { 
        label: '減色', 
        path: '/guide/Effects/'+encodeURIComponent("合成")+'/'+encodeURIComponent("減色"),
      },
      { 
        label: '斜めクリッピング', 
        path: '/guide/Effects/'+encodeURIComponent("合成")+'/'+encodeURIComponent("斜めクリッピング"),
      },
      { 
        label: '図形切り抜き', 
        path: '/guide/Effects/'+encodeURIComponent("合成")+'/'+encodeURIComponent("図形切り抜き"),
      },
    ],
  },
];


export const allGuideRoutes: Routes = guideRoutes.flatMap((route) =>
  route.pages ? route.pages : [{ label: route.label, path: route.path }],
);