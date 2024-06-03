import { Routes } from './type';

export const effectsRoutes: Routes = [
  {
    label: '概要',
    path: '/effects/overview',
  },
  {
    label: 'アニメーション',
    pages: [
      { 
        label: 'グリッチノイズ（帯）', 
        path: '/effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("グリッチノイズ（帯）"),
      },
      { 
        label: 'ランダム移動', 
        path: '/effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("ランダム移動"),
      },
      { 
        label: 'ランダム回転', 
        path: '/effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("ランダム回転"),
      },
      { 
        label: 'ランダム拡大縮小', 
        path: '/effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("ランダム拡大縮小"),
      },
      { 
        label: 'ランダム傾斜変形', 
        path: '/effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("ランダム傾斜変形"),
      },
      { 
        label: 'ランダム透過', 
        path: '/effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("ランダム透過"),
      },
      { 
        label: '砕け散る', 
        path: '/effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("砕け散る"),
      },
      { 
        label: '跳ねる', 
        path: '/effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("跳ねる"),
      },
      { 
        label: '波打ち', 
        path: '/effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("波打ち"),
      },
      { 
        label: '波紋', 
        path: '/effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("波紋"),
      },
      { 
        label: '反復移動', 
        path: '/effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("反復移動"),
      },
      { 
        label: '反復回転', 
        path: '/effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("反復回転"),
      },
      { 
        label: '反復拡大縮小', 
        path: '/effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("反復拡大縮小"),
      },
      { 
        label: '反復傾斜変形', 
        path: '/effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("反復傾斜変形"),
      },
      { 
        label: '反復透過', 
        path: '/effects/'+encodeURIComponent("アニメーション")+'/'+encodeURIComponent("反復透過"),
      },
    ],
  },
  {
    label: 'カメラ',
    pages: [
      { 
        label: 'カメラ位置', 
        path: '/effects/'+encodeURIComponent("カメラ")+'/'+encodeURIComponent("カメラ位置"),
      },
      { 
        label: '回り込みカメラ', 
        path: '/effects/'+encodeURIComponent("カメラ")+'/'+encodeURIComponent("回り込みカメラ"),
      },
      { 
        label: '注目カメラ', 
        path: '/effects/'+encodeURIComponent("カメラ")+'/'+encodeURIComponent("注目カメラ"),
      },
    ],
  },
  {
    label: '加工',
    pages: [
      { 
        label: 'ガンマ補正', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("ガンマ補正"),
      },
      { 
        label: 'グラデーション', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("グラデーション"),
      },
      { 
        label: 'シャープ化', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("シャープ化"),
      },
      { 
        label: 'セピア', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("セピア"),
      },
      { 
        label: 'ディスプレイスメントマップ', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("ディスプレイスメントマップ"),
      },
      { 
        label: 'ノイズ', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("ノイズ"),
      },
      { 
        label: 'ノイズ色ずれ', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("ノイズ色ずれ"),
      },
      { 
        label: 'ノイズ歪み', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("ノイズ歪み"),
      },
      { 
        label: 'ハイライトとシャドー', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("ハイライトとシャドー"),
      },
      { 
        label: 'ぼかし', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("ぼかし"),
      },
      { 
        label: 'モザイク', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("モザイク"),
      },
      { 
        label: '回転ブラー', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("回転ブラー"),
      },
      { 
        label: '角丸め', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("角丸め"),
      },
      { 
        label: '境界ぼかし', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("境界ぼかし"),
      },
      { 
        label: '色ズレ', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("色ズレ"),
      },
      { 
        label: '色収差', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("色収差"),
      },
      { 
        label: '色調補正', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("色調補正"),
      },
      { 
        label: '色反転', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("色反転"),
      },
      { 
        label: '色味調整', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("色味調整"),
      },
      { 
        label: '線形色変換', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("線形色変換"),
      },
      { 
        label: '単色化', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("単色化"),
      },
      { 
        label: '抽象化', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("抽象化"),
      },
      { 
        label: '二値化', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("二値化"),
      },
      { 
        label: '放射ブラー', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("放射ブラー"),
      },
      { 
        label: '放射光', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("放射光"),
      },
      { 
        label: '方向ブラー', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("方向ブラー"),
      },
      { 
        label: '網点', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("網点"),
      },
      { 
        label: '露光調整', 
        path: '/effects/'+encodeURIComponent("加工")+'/'+encodeURIComponent("露光調整"),
      },
    ],
  },
  {
    label: '合成',
    pages: [
      { 
        label: 'クリッピング', 
        path: '/effects/'+encodeURIComponent("合成")+'/'+encodeURIComponent("クリッピング"),
      },
      { 
        label: 'クロマキー', 
        path: '/effects/'+encodeURIComponent("合成")+'/'+encodeURIComponent("クロマキー"),
      },
      { 
        label: 'モーショントラッキング', 
        path: '/effects/'+encodeURIComponent("合成")+'/'+encodeURIComponent("モーショントラッキング"),
      },
      { 
        label: '減色', 
        path: '/effects/'+encodeURIComponent("合成")+'/'+encodeURIComponent("減色"),
      },
      { 
        label: '斜めクリッピング', 
        path: '/effects/'+encodeURIComponent("合成")+'/'+encodeURIComponent("斜めクリッピング"),
      },
      { 
        label: '図形切り抜き', 
        path: '/effects/'+encodeURIComponent("合成")+'/'+encodeURIComponent("図形切り抜き"),
      },
    ],
  },
    {
    label: '装飾',
    pages: [
      { 
        label: '影', 
        path: '/effects/'+encodeURIComponent("装飾")+'/'+encodeURIComponent("影"),
      },
      { 
        label: '影（内側）', 
        path: '/effects/'+encodeURIComponent("装飾")+'/'+encodeURIComponent("影（内側）"),
      },
      { 
        label: '縁取り', 
        path: '/effects/'+encodeURIComponent("装飾")+'/'+encodeURIComponent("縁取り"),
      },
      { 
        label: '縁取り（内側）', 
        path: '/effects/'+encodeURIComponent("装飾")+'/'+encodeURIComponent("縁取り（内側）"),
      },
      { 
        label: '画像の貼り付け', 
        path: '/effects/'+encodeURIComponent("装飾")+'/'+encodeURIComponent("画像の貼り付け"),
      },
      { 
        label: '伸びる影', 
        path: '/effects/'+encodeURIComponent("装飾")+'/'+encodeURIComponent("伸びる影"),
      },
      { 
        label: '前景塗りつぶし', 
        path: '/effects/'+encodeURIComponent("装飾")+'/'+encodeURIComponent("前景塗りつぶし"),
      },
      { 
        label: '背景画像', 
        path: '/effects/'+encodeURIComponent("装飾")+'/'+encodeURIComponent("背景画像"),
      },
      { 
        label: '背景塗りつぶし', 
        path: '/effects/'+encodeURIComponent("装飾")+'/'+encodeURIComponent("背景塗りつぶし"),
      },
      { 
        label: '網点影', 
        path: '/effects/'+encodeURIComponent("装飾")+'/'+encodeURIComponent("網点影"),
      },
      { 
        label: '網点影（内側）', 
        path: '/effects/'+encodeURIComponent("装飾")+'/'+encodeURIComponent("網点影（内側）"),
      },
      { 
        label: '網点縁取り', 
        path: '/effects/'+encodeURIComponent("装飾")+'/'+encodeURIComponent("網点縁取り"),
      },
      { 
        label: '網点境界ぼかし', 
        path: '/effects/'+encodeURIComponent("装飾")+'/'+encodeURIComponent("網点境界ぼかし"),
      },
      { 
        label: '立体化', 
        path: '/effects/'+encodeURIComponent("装飾")+'/'+encodeURIComponent("立体化"),
      },
      { 
        label: '枠線', 
        path: '/effects/'+encodeURIComponent("装飾")+'/'+encodeURIComponent("枠線"),
      },
    ],
  },
  {
    label: '登場退場',
    pages: [
      { 
        label: 'フェードイン・フェードアウト', 
        path: '/effects/'+encodeURIComponent("登場退場")+'/'+encodeURIComponent("フェードイン・アウト"),
      },
      { 
        label: 'ぼかしを解除しながら登場退場', 
        path: '/effects/'+encodeURIComponent("登場退場")+'/'+encodeURIComponent("ぼかしを解除しながら登場退場"),
      },
      { 
        label: 'モザイクを解除しながら登場退場', 
        path: '/effects/'+encodeURIComponent("登場退場")+'/'+encodeURIComponent("モザイクを解除しながら登場退場"),
      },
      { 
        label: '移動しながら登場退場', 
        path: '/effects/'+encodeURIComponent("登場退場")+'/'+encodeURIComponent("移動しながら登場退場"),
      },
      { 
        label: '画面外から登場退場', 
        path: '/effects/'+encodeURIComponent("登場退場")+'/'+encodeURIComponent("画面外から登場退場"),
      },
      { 
        label: '回転しながら登場退場', 
        path: '/effects/'+encodeURIComponent("登場退場")+'/'+encodeURIComponent("回転しながら登場退場"),
      },
      { 
        label: '拡大縮小しながら登場退場', 
        path: '/effects/'+encodeURIComponent("登場退場")+'/'+encodeURIComponent("拡大縮小しながら登場退場"),
      },
      { 
        label: '起き上がりながら登場退場', 
        path: '/effects/'+encodeURIComponent("登場退場")+'/'+encodeURIComponent("起き上がりながら登場退場"),
      },
      { 
        label: '境界ぼかしを解除しながら登場退場', 
        path: '/effects/'+encodeURIComponent("登場退場")+'/'+encodeURIComponent("境界ぼかしを解除しながら登場退場"),
      },
      { 
        label: '傾斜変形しながら登場退場', 
        path: '/effects/'+encodeURIComponent("登場退場")+'/'+encodeURIComponent("傾斜変形しながら登場退場"),
      },
      { 
        label: '砕け散りながら登場退場', 
        path: '/effects/'+encodeURIComponent("登場退場")+'/'+encodeURIComponent("砕け散りながら登場退場"),
      },
      { 
        label: '場面切り替え（ルール画像）', 
        path: '/effects/'+encodeURIComponent("登場退場")+'/'+encodeURIComponent("場面切り替え（ルール画像）"),
      },
      { 
        label: '跳ねながら登場退場', 
        path: '/effects/'+encodeURIComponent("登場退場")+'/'+encodeURIComponent("跳ねながら登場退場"),
      },
      { 
        label: '領域外から登場退場', 
        path: '/effects/'+encodeURIComponent("登場退場")+'/'+encodeURIComponent("領域外から登場退場"),
      },
    ],
  },
  {
    label: '配置',
    pages: [
      { 
        label: 'ランダム配置', 
        path: '/effects/'+encodeURIComponent("配置")+'/'+encodeURIComponent("ランダム配置"),
      },
      { 
        label: '円形配列', 
        path: '/effects/'+encodeURIComponent("配置")+'/'+encodeURIComponent("円形配列"),
      },
      { 
        label: '敷き詰め', 
        path: '/effects/'+encodeURIComponent("配置")+'/'+encodeURIComponent("敷き詰め"),
      },
      { 
        label: '複製して反転', 
        path: '/effects/'+encodeURIComponent("配置")+'/'+encodeURIComponent("複製して反転"),
      },
    ],
  },
  {
    label: '描画',
    pages: [
      { 
        label: '3D回転', 
        path: '/effects/'+encodeURIComponent("描画")+'/'+encodeURIComponent("3D回転"),
      },
      { 
        label: 'プレビュー時にのみ表示', 
        path: '/effects/'+encodeURIComponent("描画")+'/'+encodeURIComponent("プレビュー時にのみ表示"),
      },
      { 
        label: 'メッシュ変形', 
        path: '/effects/'+encodeURIComponent("描画")+'/'+encodeURIComponent("メッシュ変形"),
      },
      { 
        label: '画面に収まるように拡大縮小', 
        path: '/effects/'+encodeURIComponent("描画")+'/'+encodeURIComponent("画面内に収まるように拡大縮小"),
      },
      { 
        label: '拡大縮小', 
        path: '/effects/'+encodeURIComponent("描画")+'/'+encodeURIComponent("拡大縮小"),
      },
      { 
        label: '極座標変換', 
        path: '/effects/'+encodeURIComponent("描画")+'/'+encodeURIComponent("極座標変換"),
      },
      { 
        label: '極座標変換（描画位置）', 
        path: '/effects/'+encodeURIComponent("描画")+'/'+encodeURIComponent("極座標変換（描画位置）"),
      },
      { 
        label: '傾斜変形', 
        path: '/effects/'+encodeURIComponent("描画")+'/'+encodeURIComponent("傾斜変形"),
      },
      { 
        label: '遅延エフェクトを描画', 
        path: '/effects/'+encodeURIComponent("描画")+'/'+encodeURIComponent("遅延エフェクトを描画"),
      },
      { 
        label: '中心位置', 
        path: '/effects/'+encodeURIComponent("描画")+'/'+encodeURIComponent("中心位置"),
      },
      { 
        label: '描画位置', 
        path: '/effects/'+encodeURIComponent("描画")+'/'+encodeURIComponent("描画位置"),
      },
      { 
        label: '描画位置（極座標）', 
        path: '/effects/'+encodeURIComponent("描画")+'/'+encodeURIComponent("描画位置（極座標）"),
      },
      { 
        label: '不透明度', 
        path: '/effects/'+encodeURIComponent("描画")+'/'+encodeURIComponent("不透明度"),
      },
      { 
        label: '余白追加', 
        path: '/effects/'+encodeURIComponent("描画")+'/'+encodeURIComponent("余白追加"),
      },
    ],
  },
];

export const allEffectsRoutes: Routes = effectsRoutes.flatMap((route) =>
  route.pages ? route.pages : [{ label: route.label, path: route.path }],
);
