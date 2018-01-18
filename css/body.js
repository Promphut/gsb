import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'none': {
    'display': 'none !important'
  },
  'hidden': {
    'visibility': 'hidden !important'
  },
  'site-content': {
    'overflow': 'hidden'
  },
  'home-blog-space': {
    'height': [{ 'unit': 'px', 'value': 15 }]
  },
  'main-header': {
    'marginTop': [{ 'unit': 'px', 'value': 15 }],
    'position': 'relative',
    '>w992': {
      'marginBottom': [{ 'unit': 'px', 'value': 0 }],
      'marginTop': [{ 'unit': 'px', 'value': 30 }]
    }
  },
  'main-header-after': {
    'marginTop': [{ 'unit': 'px', 'value': 15 }],
    'position': 'relative',
    '>w992': {
      'marginBottom': [{ 'unit': 'px', 'value': 0 }],
      'marginTop': [{ 'unit': 'px', 'value': 30 }]
    }
  },
  'main-header-before': {
    'position': 'relative'
  },
  'main-title': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'position': 'relative',
    'zIndex': '3',
    'display': 'table',
    'background': '#fff',
    'color': '#c6127c',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 25 }],
    'fontFamily': ''rsubold''
  },
  'main-header:after': {
    'content': '''',
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 20 }],
    'backgroundColor': '#34495e'
  },
  'main-header-after:after': {
    'content': '''',
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 20 }],
    'backgroundColor': '#34495e'
  },
  'main-header:before': {
    'content': '''',
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 20 }],
    'backgroundColor': '#34495e'
  },
  'main-header-before:before': {
    'content': '''',
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 20 }],
    'backgroundColor': '#34495e'
  },
  'section-com-1': {
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }],
    'color': '#ec068d'
  },
  'section-com-2': {
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }],
    'background': 'linear-gradient(90deg, #c6127c 0%, #ec068d 100%), #ec068d',
    'color': '#ffffff'
  },
  ':root section-com-2': {
    'background': '#ec068d\0'
  },
  'main-title a': {
    'color': '#fff'
  },
  'site-main-hide-title h1entry-title': {
    'display': 'none'
  },
  'site-main-hide-title h1page-title': {
    'display': 'none'
  },
  'site-banner': {
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'category content-area': {
    'marginBottom': [{ 'unit': 'px', 'value': 30 }],
    'minHeight': [{ 'unit': 'px', 'value': 400 }],
    'maxWidth': [{ 'unit': 'px', 'value': 992 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'category main-header': {
    'marginTop': [{ 'unit': 'px', 'value': 56 }],
    'marginBottom': [{ 'unit': 'px', 'value': 32 }]
  },
  'content-item': {
    'marginBottom': [{ 'unit': 'px', 'value': 15 }],
    '>w768': {
      'marginBottom': [{ 'unit': 'px', 'value': 30 }]
    }
  },
  'content-item pic': {
    'lineHeight': [{ 'unit': 'px', 'value': 0 }]
  },
  'content-item pic img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'content-item cat-links': {
    'display': 'none'
  },
  'content-item-list': {
    'marginLeft': [{ 'unit': 'px', 'value': -15 }],
    'marginRight': [{ 'unit': 'px', 'value': -15 }]
  },
  'content-item-list:before': {
    'content': '''',
    'display': 'table'
  },
  'content-item-list:after': {
    'content': '''',
    'display': 'table'
  },
  'content-item-list:after': {
    'clear': 'both'
  },
  'content-item-archive:before': {
    'content': '''',
    'display': 'table'
  },
  'content-item-archive:after': {
    'content': '''',
    'display': 'table'
  },
  'content-item-archive:after': {
    'clear': 'both'
  },
  'content-item-list pic': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.333333 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }]
  },
  'content-item-list info': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.666666 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }]
  },
  'content-item-card info': {
    'paddingTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'content-item-archive pic': {
    'float': 'right',
    'width': [{ 'unit': '%H', 'value': 0.333333 }],
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'content-item-caption': {
    'position': 'relative'
  },
  'content-item-caption pic': {
    'lineHeight': [{ 'unit': 'px', 'value': 0 }]
  },
  'content-item-caption info': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }],
    'color': '#fff',
    'opacity': '0.8',
    'transition': '400ms',
    'backgroundImage': 'linear-gradient(
		to bottom,
		rgba(0, 0, 0, 0) 0%,
		rgba(0, 0, 0, 0.8) 100%
	)',
    'textShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.5)' }]
  },
  'content-item-caption info:hover': {
    'opacity': '1'
  },
  'content-item-caption info a': {
    'color': '#fff'
  },
  'content-item-caption entry-title': {
    'marginBottom': [{ 'unit': 'px', 'value': 2 }]
  },
  'content-item-caption entry-meta': {
    'display': 'none'
  },
  'content-item entry-title a': {
    'color': '#222222'
  },
  'content-item entry-title': {
    'fontSize': [{ 'unit': 'px', 'value': 26 }],
    'fontFamily': ''rsubold'',
    'lineHeight': [{ 'unit': 'px', 'value': 34 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'widget content-item entry-title': {
    'fontSize': [{ 'unit': 'em', 'value': 1.3 }]
  },
  'content-item entry-date': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 8 }]
  },
  'content-item entry-meta': {
    'color': '#8e8e8e',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'display': 'table',
    'whiteSpace': 'nowrap',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'content-item tags-links': {
    'display': 'none'
  },
  'content-item entry-footer': {
    'display': 'none'
  },
  'content-item entry-summary p': {
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 15 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#8e8e8e',
    'fontFamily': ''rsuregular'',
    // min-height: 84px;
  },
  'content-item limit': {
    'fontFamily': ''rsuregular'',
    'color': '#c6127c',
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  'content-item entry-meta:before': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'content': '''',
    'display': 'table-cell',
    'position': 'relative',
    'top': [{ 'unit': 'em', 'value': 0.6 }],
    'width': [{ 'unit': 'px', 'value': 16 }]
  },
  'content-table-date': {
    'width': [{ 'unit': 'px', 'value': 140 }]
  },
  'entry-meta': {
    'fontSize': [{ 'unit': 'em', 'value': 0.93 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'opacity': '0.8'
  },
  'entry-meta a': {
    'color': '#666'
  },
  'entry-meta a:hover': {
    'opacity': '1'
  },
  'entry-meta a:hover': {
    'opacity': '0.6'
  },
  'entry-meta > span': {
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'entry-meta i': {
    'marginRight': [{ 'unit': 'px', 'value': 4 }]
  },
  'content-pagination': {
    'clear': 'both',
    'textAlign': 'center',
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'content-pagination a': {
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 8 }],
    'minWidth': [{ 'unit': 'px', 'value': 24 }],
    'textAlign': 'center',
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#8f8f8f'
  },
  'content-pagination span': {
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 8 }],
    'minWidth': [{ 'unit': 'px', 'value': 24 }],
    'textAlign': 'center',
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#8f8f8f'
  },
  'content-pagination a i': {
    'verticalAlign': '-1px'
  },
  'content-pagination current': {
    'color': '#ec068d',
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'content-pagination span': {
    'fontWeight': 'bold'
  },
  '-block-ellipsis-3': {
    'display': 'block',
    'display': '-webkit-box',
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'WebkitLineClamp': '3',
    'WebkitBoxOrient': 'vertical',
    'overflow': 'hidden',
    'textOverflow': 'ellipsis'
  },
  ':root -block-ellipsis-3': {
    'maxHeight': [{ 'unit': 'px', 'value': 75 }]
  },
  '-block-ellipsis-2': {
    'display': 'block',
    'display': '-webkit-box',
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'WebkitLineClamp': '2',
    'WebkitBoxOrient': 'vertical',
    'overflow': 'hidden',
    'textOverflow': 'ellipsis'
  },
  'articletype-post': {
    'marginBottom': [{ 'unit': 'px', 'value': 30 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eaeaea' }]
  },
  'articletype-postcategory-video': {
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }]
  },
  'post-slide': {
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'carouselcarousel-slider carousel-fixed-itemwith-indicators': {
    'bottom': [{ 'unit': 'px', 'value': 130 }]
  },
  'btn': {
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'carouselcarousel-slider carousel-item h2': {
    'fontSize': [{ 'unit': 'px', 'value': 28 }],
    'fontFamily': ''rsubold'',
    'paddingLeft': [{ 'unit': 'px', 'value': 20 }],
    'paddingRight': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': '%H', 'value': 0.7 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'overlay-carousel-item': {
    'background': 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))',
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'menu login': {
    'background': '#c6127c',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }],
    'borderRadius': '4px'
  },
  'limenu-item-29 a:hover': {
    'backgroundColor': 'transparent'
  },
  'nav ul limenu-item-29:hover': {
    'backgroundColor': 'transparent'
  },
  'nav ulsub-menu a:hover': {
    'color': '#ec068d'
  },
  'limenu-item-29 a': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'menu-item-437': {
    'float': 'right'
  },
  'menu-item-673': {
    'float': 'right'
  },
  'entry-content': {
    'maxWidth': [{ 'unit': 'px', 'value': 736 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'marginBottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'post-thumbnail': {
    'marginBottom': [{ 'unit': 'px', 'value': 30 }],
    'textAlign': 'center'
  },
  'post-thumbnail img': {
    'textAlign': 'center',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'entry-content entry-meta': {
    'textAlign': 'center'
  },
  'entry-content entry-meta entry-date': {
    'fontFamily': ''rsuregular'',
    'color': '#8f8f8f',
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'entry-content entry-title': {
    'fontFamily': ''rsubold'',
    'color': '#222222'
  },
  'entry-content pinkline': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c6127c' }],
    'width': [{ 'unit': 'px', 'value': 300 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'marginBottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'entry-content p': {
    'fontFamily': ''THSarabunNew'',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'px', 'value': 2 }]
  },
  'entry-content li': {
    'fontFamily': ''THSarabunNew'',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'px', 'value': 2 }]
  },
  'blockquote': {
    'borderLeft': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec048d' }]
  },
  'blockquote p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'entry-content tags': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'entry-content tags li': {
    'display': 'inline-block',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eaeaea' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }],
    'marginRight': [{ 'unit': 'px', 'value': 15 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'pointerEvents': 'none',
    'cursor': 'default'
  },
  'entry-content tags li a': {
    'color': '#ec068d',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'entry-content type-post h1': {
    'fontFamily': ''THSarabunNew''
  },
  'h2': {
    'fontFamily': ''THSarabunNew''
  },
  'h3': {
    'fontFamily': ''THSarabunNew''
  },
  'h4': {
    'fontFamily': ''THSarabunNew''
  },
  'h5': {
    'fontFamily': ''THSarabunNew''
  },
  'h6': {
    'fontFamily': ''THSarabunNew''
  },
  'entry-content type-post h1': {
    'fontSize': [{ 'unit': 'px', 'value': 32 }]
  },
  'entry-content type-post h2': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }]
  },
  'entry-content type-post h3': {
    'fontSize': [{ 'unit': 'px', 'value': 26 }]
  },
  'entry-content type-post h4': {
    'fontSize': [{ 'unit': 'px', 'value': 24 }]
  },
  'entry-content type-post h5': {
    'fontSize': [{ 'unit': 'px', 'value': 22 }]
  },
  'entry-content type-post h6': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'section-joinclub': {
    'backgroundColor': '#c6127c',
    'paddingTop': [{ 'unit': 'px', 'value': 50 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'section-joinclub title': {
    'fontFamily': ''rsubold''
  },
  'section-joinclub > btn': {
    'borderBottom': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dbdbdb' }],
    'borderLeft': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dbdbdb' }],
    'height': [{ 'unit': 'px', 'value': 60 }],
    'lineHeight': [{ 'unit': 'px', 'value': 60 }],
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'borderRadius': '10px',
    'textTransform': 'initial',
    'transition': '0.4s'
  },
  'section-joinclub > btn:hover': {
    'transform': 'translateY(-10px)'
  },
  'content-itemvideo': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'content-itemvideo info': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'float': 'none',
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'content-itemvideo entry-title': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'video-thumb frame': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'transition': 'all 0.3s'
  },
  'video-thumb': {
    'position': 'relative',
    'overflow': 'hidden'
  },
  'video-thumb:hover frame': {
    'MsTransform': 'scale(1.1, 1.1)',
    'WebkitTransform': 'scale(1.1, 1.1)',
    'transform': 'scale(1.1, 1.1)'
  },
  'front-overlay': {
    'height': [{ 'unit': 'vh', 'value': 100 }],
    // #C6117B
    // #EC058D
    // background: #ea078c;
    'background': 'linear-gradient(#c6117b, #ec058d)',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '100',
    'animation': 'bg-fade 1s ease-in'
  },
  'content-itemvideo entry-title a': {
    'minHeight': [{ 'unit': 'px', 'value': 68 }]
  },
  'entry-contentvideo': {
    'marginTop': [{ 'unit': 'px', 'value': 50 }]
  },
  'row-footer': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'section-update title': {
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'position': 'relative',
    'zIndex': '3',
    'display': 'table',
    'background': '#fff',
    'color': '#c6127c',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 25 }],
    'fontFamily': ''rsubold''
  },
  'section-update': {
    'paddingTop': [{ 'unit': 'px', 'value': 30 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'pure-parallax-container': {
    'height': [{ 'unit': 'px', 'value': 450 }]
  },
  'pure-parallax': {
    'backgroundAttachment': 'fixed',
    'backgroundPosition': 'center',
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': 'cover'
  },
  'partner-parallax': {
    'height': [{ 'unit': 'px', 'value': 450 }],
    '<w767': {
      'height': [{ 'unit': 'px', 'value': 150 }],
      'backgroundPositionX': '30%'
    }
  },
  'partner-parallax > partner-overlay': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'background': 'rgba(0, 0, 0, 0.4)'
  },
  'partner-parallax > partner-overlay > container': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'partner-parallax header': {
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 48 }]
  },
  'partner-parallax sub-header': {
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 36 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'section-com': {
    'paddingTop': [{ 'unit': 'px', 'value': 50 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 50 }],
    'backgroundColor': '#fafafa',
    '<w767': {
      'paddingBottom': [{ 'unit': 'px', 'value': 5 }]
    }
  },
  'section-com title': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'position': 'relative',
    'zIndex': '3',
    'display': 'table',
    'background': '#fafafa',
    'color': '#34495e',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 25 }],
    'fontFamily': ''rsubold'',
    'textAlign': 'center'
  },
  'section-com title-2': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': '%H', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'position': 'relative',
    'zIndex': '3',
    'display': 'table',
    'background': '#fafafa',
    'color': '#34495e',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 25 }],
    'fontFamily': ''rsubold'',
    'textAlign': 'center'
  },
  'section-com main-header-after:after': {
    'content': '''',
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 24 }],
    'backgroundColor': '#34495e'
  },
  'section-com main-header:after': {
    'content': '''',
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 24 }],
    'backgroundColor': '#34495e'
  },
  'section-com main-header-after:after': {
    'content': '''',
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 24 }],
    'backgroundColor': '#34495e'
  },
  'section-com main-header:before': {
    'content': '''',
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 24 }],
    'backgroundColor': '#34495e'
  },
  'section-com main-header-before:before': {
    'content': '''',
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 24 }],
    'backgroundColor': '#34495e'
  },
  'section-com > container > showcase-row > col': {
    'marginLeft': [{ 'unit': '%H', 'value': -0.25 }],
    'transition': '1.5s'
  },
  ':root section-com > container > showcase-row > col': {
    'display': 'table-cell\0',
    'float': 'none\0'
  },
  'section-com > container > showcase-row > colslide': {
    'marginLeft': [{ 'unit': '%H', 'value': 0 }]
  },
  'section-com > container > showcase-row > col:first-child': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'cardhorizontal card-image img': {
    'borderTopLeftRadius': '10px',
    'borderBottomLeftRadius': '10px',
    'borderTopRightRadius': '0',
    'borderBottomRightRadius': '0',
    'maxHeight': [{ 'unit': '%V', 'value': 1 }]
  },
  'cardhorizontal': {
    'borderRadius': '10px'
  },
  'card name': {
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 32 }],
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'card pos': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'card p': {
    'fontFamily': ''THSarabunNew'',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'px', 'value': 2 }]
  },
  'card card-image img': {
    'borderTopLeftRadius': '10px',
    'borderTopRightRadius': '10px',
    'minHeight': [{ 'unit': 'px', 'value': 202 }],
    'maxHeight': [{ 'unit': 'px', 'value': 202 }]
  },
  'card': {
    'borderRadius': '10px'
  },
  'card card-action': {
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }]
  },
  'card card-action a:not(btn):not(btn-large):not(btn-large):not(btn-floating)': {
    'color': '#ec068d',
    'fontFamily': ''rsuregular'',
    'textTransform': 'none',
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  'card i': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'card card-action a:not(btn):not(btn-large):not(btn-large):not(btn-floating):hover': {
    'color': '#b0b0b0'
  },
  'section-com btn': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(236, 6, 141, 0.5)' }],
    'background': 'transparent',
    'color': '#ec068d',
    'borderRadius': '4px'
  },
  'section-com btn:hover': {
    'background': '#ec068d',
    'color': '#fff'
  },
  'section-com showcase-row': {
    'paddingTop': [{ 'unit': 'px', 'value': 30 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  ':root section-com showcase-row': {
    'display': 'table\0'
  },
  'section-com pinkline': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#34495e' }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'section-join': {
    'color': '#fff'
  },
  'section-join join-intro': {
    'backgroundColor': '#000',
    'paddingTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'section-join join-intro row': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'section-join title': {
    'fontFamily': ''rsubold'',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 32 }]
  },
  'section-join title pink-text': {
    'color': '#ec068d'
  },
  'section-join box': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'minHeight': [{ 'unit': 'px', 'value': 595 }],
    'backgroundSize': 'cover',
    'backgroundRepeat': 'no-repeat'
  },
  'section-join join-select col': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'position': 'relative'
  },
  'section-join join-select img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'section-join join-select float': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 50 }]
  },
  'section-join join-select floatleft': {
    'paddingLeft': [{ 'unit': 'px', 'value': 70 }]
  },
  'section-join join-select floatright': {
    'top': [{ 'unit': 'px', 'value': 50 }]
  },
  'section-join float sub-title': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }]
  },
  'section-join float title': {
    'fontSize': [{ 'unit': 'px', 'value': 40 }]
  },
  'join-parallax': {
    'width': [{ 'unit': 'vw', 'value': 50 }]
  },
  '#join-parallax-2': {
    'marginLeft': [{ 'unit': 'px', 'value': -80 }]
  },
  'section-invest': {
    'background': '#ebeff3',
    'paddingTop': [{ 'unit': 'px', 'value': 100 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'section-invest title': {
    'fontSize': [{ 'unit': 'px', 'value': 32 }],
    'fontFamily': ''Roboto'',
    'color': '#c6127c',
    'fontWeight': 'bold',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'section-invest sub-title': {
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'fontFamily': ''rsuregular'',
    'color': '#222',
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'section-invest sub-title > li:before': {
    'content': ''— '',
    'color': '#c6127c'
  },
  'section-quote': {
    'backgroundColor': '#ec068d',
    'paddingTop': [{ 'unit': 'px', 'value': 50 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'section-quote quote': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'color': '#fff',
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 32 }],
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'section-quote row': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'section-quote author': {
    'color': 'rgba(255, 255, 255, 0.8)',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 28 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'section-quote author-line': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(255, 255, 255, 0.8)' }],
    'display': 'table-cell',
    'position': 'relative',
    'top': [{ 'unit': 'em', 'value': 0.6 }],
    'width': [{ 'unit': 'px', 'value': 16 }]
  },
  'products > row': {
    'display': 'flex',
    'flexDirection': 'row',
    'justifyContent': 'space-between',
    'opacity': '0',
    'transition': '3s'
  },
  ':root products > row': {
    'opacity': '1\9',
    'display': 'table\9',
    'margin': [{ 'unit': 'string', 'value': 'auto\9' }, { 'unit': 'string', 'value': 'auto\9' }, { 'unit': 'string', 'value': 'auto\9' }, { 'unit': 'string', 'value': 'auto\9' }]
  },
  'products > rowshow': {
    'opacity': '1'
  },
  'products > row > flex': {
    'display': 'flex',
    'flexDirection': 'row',
    '<w991': {
      'flex': '1 !important',
      'justifyContent': 'center'
    }
  },
  ':root products > row > flex': {
    'display': 'table-cell\9'
  },
  'products > row > flexflex-1': {
    'flex': '1'
  },
  'products > row > flexflex-3': {
    'flex': '3'
  },
  'products > row > flexright': {
    'justifyContent': 'flex-end'
  },
  'products > row > flex > box': {
    'height': [{ 'unit': 'px', 'value': 200 }],
    'width': [{ 'unit': 'px', 'value': 200 }],
    'position': 'relative',
    'backgroundSize': 'contain',
    'backgroundPosition': 'center',
    'backgroundRepeat': 'no-repeat',
    '>w767&&<w991': {
      'width': [{ 'unit': '%H', 'value': 1 }],
      'height': [{ 'unit': 'px', 'value': 200 }],
      'flex': '1'
    }
  },
  ':root products > row > flex > box': {
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'products > row > flex > box > overlay': {
    'position': 'absolute',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'flexDirection': 'column',
    'backgroundColor': 'rgba(56, 55, 60, 0.9)',
    'opacity': '0',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'transition': '0.5s',
    'cursor': 'pointer'
  },
  ':root products > row > flex > box > overlay': {
    'cursor': 'auto\9'
  },
  'products > row > flex > box > overlay > product': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'color': '#ffffff'
  },
  'products > row > flex > box > overlay > brand': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#ffffff'
  },
  'products > row > flex > box > overlay > brand > span': {
    'color': '#ec068d'
  },
  'products > row > flex > box > overlay:hover': {
    'opacity': '1'
  },
  ':root products > row > flex > box > overlay:hover': {
    'opacity': '0\9'
  },
  'products > row > flex > boximg-1': {
    'backgroundImage': 'url('../img/product-1.png')'
  },
  'products > row > flex > boximg-2': {
    'backgroundImage': 'url('../img/product-2.png')'
  },
  'products > row > flex > boximg-3': {
    'backgroundImage': 'url('../img/product-3.png')'
  },
  'products > row > flex > boximg-4': {
    'backgroundImage': 'url('../img/product-4.png')'
  },
  'products > row > flex > boximg-5': {
    'backgroundImage': 'url('../img/product-5.png')'
  },
  'products > row > flex > boximg-6': {
    'backgroundImage': 'url('../img/product-6.png')'
  },
  'products > row > flex > overlay': {
    'flex': '1',
    'maxWidth': [{ 'unit': '%H', 'value': 0 }],
    'opacity': '0',
    'overflow': 'hidden',
    'transition': '2s',
    'background': 'rgba(56, 55, 60, 0.9)'
  },
  'products > row > flex > overlayshow': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'opacity': '1'
  },
  'products > row > flex > overlay > detail': {
    'height': [{ 'unit': 'px', 'value': 200 }],
    'padding': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }],
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#ffffff',
    'opacity': '0',
    'transition': '1s'
  },
  ':root products > row > flex > overlay > detail': {
    'display': 'none\9'
  },
  'products > row > flex > overlay > detailshow': {
    'height': [{ 'unit': 'px', 'value': 200 }],
    'padding': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }],
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#ffffff',
    'opacity': '1',
    '<w991': {
      'display': 'none'
    }
  },
  'section-precheckup container': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'transform': 'translate(-50%,-50%)'
  },
  'section-checkup chk-block': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'transform': 'translate(-50%,-50%)',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'products > row > flex > overlay > detail > product': {
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'products > row > flex > overlay > detail > product > span': {
    'color': '#ec068d'
  },
  'joinus': {
    'display': 'flex',
    'flexFlow': 'row wrap'
  },
  ':root joinus': {
    'display': 'block\0'
  },
  'joinus > block': {
    'flex': '1',
    '<w767': {
      'flex': 'none',
      'width': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w767&&<w991': {
      'flex': 'none',
      'width': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  ':root joinus > block': {
    'flex': 'none\0',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'display': 'inline-block\0',
    'float': 'left\0'
  },
  'joinus > blockimg': {
    'backgroundImage': 'url('../img/joinus.jpg')',
    'backgroundSize': 'cover',
    'backgroundPosition': 'center',
    'height': [{ 'unit': 'px', 'value': 574 }],
    '<w991': {
      'height': [{ 'unit': 'px', 'value': 650 }]
    }
  },
  'joinus > blockcontent': {
    'backgroundColor': '#102442',
    'padding': [{ 'unit': 'px', 'value': 48 }, { 'unit': 'px', 'value': 48 }, { 'unit': 'px', 'value': 48 }, { 'unit': 'px', 'value': 48 }],
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'color': '#ffffff',
    'display': 'flex',
    'flexDirection': 'column'
  },
  ':root joinus > blockcontent': {
    'height': [{ 'unit': 'px', 'value': 574 }]
  },
  'joinus > blockcontent > h2': {
    'flex': '1',
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 32 }],
    'color': '#ffffff',
    // width: 48%;
    'lineHeight': [{ 'unit': 'px', 'value': 1.6 }],
    'display': 'flex',
    'alignItems': 'center'
  },
  'joinus > blockcontent > ul': {
    'flex': '3',
    'display': 'flex',
    'flexDirection': 'column',
    // width: 70%;
    'justifyContent': 'space-between'
  },
  'joinus > blockcontent > ul > li': {
    'margin': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 0 }]
  },
  'joinus > blockcontent > ul > li > div': {
    'height': [{ 'unit': 'px', 'value': 25 }],
    'width': [{ 'unit': 'px', 'value': 32 }],
    'float': 'left',
    'backgroundSize': 'contain',
    'backgroundPositionX': 'center',
    'backgroundRepeat': 'no-repeat',
    'marginRight': [{ 'unit': 'px', 'value': 16 }]
  },
  'joinus > blockcontent > ul > li icon_1': {
    'backgroundImage': 'url('../img/joinus_logo_1.png')'
  },
  'joinus > blockcontent > ul > li icon_2': {
    'backgroundImage': 'url('../img/joinus_logo_2.png')'
  },
  'joinus > blockcontent > ul > li icon_3': {
    'backgroundImage': 'url('../img/joinus_logo_3.png')'
  },
  'joinus > blockcontent > ul > li icon_4': {
    'backgroundImage': 'url('../img/joinus_logo_4.png')'
  },
  'joinus > blockcontent > btnWrapper': {
    'flex': '1',
    'display': 'flex',
    'alignItems': 'center'
  },
  'joinus > blockcontent > btnWrapper > a': {
    'height': [{ 'unit': 'px', 'value': 56 }],
    'width': [{ 'unit': 'px', 'value': 300 }],
    'background': '#ec068d',
    'color': '#ffffff',
    'fontSize': [{ 'unit': 'px', 'value': 26 }],
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'borderRadius': '5px',
    'transition': '0.2s'
  },
  'joinus > blockcontent > btnWrapper > a:hover': {
    'background': '#f038a4'
  },
  'section-homejoin': {
    'paddingTop': [{ 'unit': 'px', 'value': 100 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 100 }],
    'backgroundImage': 'url('../img/homejoin.jpg')',
    'textAlign': 'center',
    'backgroundSize': 'cover',
    'backgroundRepeat': 'no-repeat'
  },
  'section-homejoin frame': {
    'backgroundColor': '#ec068d',
    'paddingTop': [{ 'unit': 'px', 'value': 50 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'section-homejoin title': {
    'fontFamily': ''rsubold'',
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 32 }]
  },
  'section-homejoin pri': {
    'color': '#fff',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'section-homejoin pri-row': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }],
    'marginBottom': [{ 'unit': 'px', 'value': 50 }],
    'textAlign': 'center'
  },
  'section-homejoin btn': {
    'color': '#ec068d',
    'background': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 28 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'lineHeight': [{ 'unit': 'px', 'value': 50 }],
    'borderRadius': '5px'
  },
  'section-update card': {
    'borderRadius': '0'
  },
  'section-update card card-image img': {
    'borderRadius': '0'
  },
  'section-update card card-image:before': {
    'content': '''',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': 'rgba(0, 0, 0, 1)',
    'opacity': '0.6'
  },
  'section-update card card-image card-title': {
    'position': 'inherit',
    'fontFamily': ''rsubold'',
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  ':root section-update card card-image card-title': {
    'top': [{ 'unit': '%V', 'value': 0.3 }]
  },
  'section-update card card-image': {
    'backgroundSize': 'cover',
    'backgroundRepeat': 'no-repeat',
    'height': [{ 'unit': 'px', 'value': 200 }]
  },
  'section-update > container > row > m8': {
    'transform': 'translateX(-60px)',
    'opacity': '0',
    'transition': '1s'
  },
  ':root section-update > container > row > m8': {
    'opacity': '1\0'
  },
  'section-update > container > row > m8slide': {
    'transform': 'translateX(0px)',
    'opacity': '1'
  },
  'section-update > container > row > m4': {
    'transform': 'translateX(60px)',
    'opacity': '0',
    'transition': '1s',
    '<w767': {
      'transform': 'translateX(0px)',
      'opacity': '1'
    }
  },
  ':root section-update > container > row > m4': {
    'opacity': '1\0'
  },
  'section-update > container > row > m4slide': {
    'transform': 'translateX(0px)',
    'opacity': '1'
  },
  'interest-box': {
    'backgroundColor': '#34495e',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'marginTop': [{ 'unit': 'rem', 'value': 0.5 }],
    'minHeight': [{ 'unit': 'px', 'value': 420 }],
    '<w767': {
      'backgroundColor': 'transparent',
      'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
    }
  },
  'interest-box thumb': {
    'textAlign': 'center',
    'marginBottom': [{ 'unit': 'px', 'value': 6 }]
  },
  'interest-box header': {
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    // // line-height: 1.6;
    // // margin-bottom: 15px;
    'color': '#fff'
  },
  'interest-box desc': {
    'fontFamily': ''THSarabunNew'',
    'lineHeight': [{ 'unit': 'px', 'value': 1.9 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'marginBottom': [{ 'unit': 'px', 'value': 28 }],
    'color': '#fff',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  ':root #search-filter-form-612 ul li:first-child': {
    'float': 'left\0'
  },
  ':root #search-filter-form-657 ul li:first-child': {
    'float': 'left\0'
  },
  ':root #search-filter-form-612 ul li:last-child': {
    'float': 'right\0'
  },
  ':root #search-filter-form-657 ul li:last-child': {
    'float': 'right\0'
  },
  'searchandfilter ul li h4': {
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  ':root #search-filter-form-612 ul li h4': {
    'display': 'block\0 !important'
  },
  ':root #search-filter-form-657 ul li h4': {
    'display': 'block\0 !important'
  },
  'searchandfilter li[data-sf-field-input-type='checkbox'] label': {
    'paddingLeft': [{ 'unit': 'px', 'value': 30 }]
  },
  'searchandfilter li[data-sf-field-input-type='radio'] label': {
    'paddingLeft': [{ 'unit': 'px', 'value': 30 }]
  },
  'searchandfilter li[data-sf-field-input-type='range-radio'] label': {
    'paddingLeft': [{ 'unit': 'px', 'value': 30 }]
  },
  'searchandfilter li[data-sf-field-input-type='range-checkbox'] label': {
    'paddingLeft': [{ 'unit': 'px', 'value': 30 }]
  },
  '[type='radio']:checked + label:after': {
    'backgroundColor': '#c6127c'
  },
  '[type='radio']with-gap:checked + label:after': {
    'backgroundColor': '#c6127c'
  },
  '[type='radio']:checked + label:after': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c6127c' }]
  },
  '[type='radio']with-gap:checked + label:before': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c6127c' }]
  },
  '[type='radio']with-gap:checked + label:after': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c6127c' }]
  },
  'searchandfilter ul > li > ul:not(children)': {
    'fontFamily': ''rsuregular''
  },
  'searchandfilter noUi-connect': {
    'backgroundColor': '#ec068d'
  },
  'collapsible-header': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'borderTopRightRadius': '4px',
    'borderTopLeftRadius': '4px'
  },
  'collapsible-header i:before': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#ec068d'
  },
  'collapsible-header i': {
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  'collapsible': {
    'borderColor': '#c4c4c4',
    'borderRadius': '4px'
  },
  'collapsible-body': {
    'padding': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 2 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 2 }]
  },
  'collapsible-body ul': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'collapsible-body li': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'collapsible-body p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'product-row': {
    'paddingTop': [{ 'unit': 'px', 'value': 50 }]
  },
  'product-row entry-title': {
    'fontSize': [{ 'unit': 'px', 'value': 28 }]
  },
  'product-row thumb img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'product-row entry-row': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'product-row section-interest': {
    'paddingTop': [{ 'unit': 'px', 'value': 60 }],
    'marginTop': [{ 'unit': 'px', 'value': 50 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eaeaea' }],
    'textAlign': 'center'
  },
  'product-row btn': {
    'borderRadius': '4px'
  },
  'product-row sub-title': {
    'color': '#c6127c',
    'fontFamily': ''rsubold''
  },
  'type-product content-item': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'type-product content-itemproduct-loop': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eaeaea' }],
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'dropdown-content li > a': {
    'color': '#222222',
    'fontFamily': ''rsuregular''
  },
  'dropdown-content li > span': {
    'color': '#222222',
    'fontFamily': ''rsuregular''
  },
  'sf-field-post-meta-objective label': {
    'width': [{ 'unit': '%H', 'value': 0.8 }]
  },
  'select-wrapper inputselect-dropdown': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eaeaea' }],
    'fontFamily': ''rsuregular'',
    'color': '#222',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'borderRadius': '4px'
  },
  'select-wrapper spancaret': {
    'color': '#ec068d'
  },
  'ms-slide ms-layer': {
    'lineHeight': [{ 'unit': 'px', 'value': 0 }]
  },
  'ms-fixed-layers ms-layer': {
    'lineHeight': [{ 'unit': 'px', 'value': 0 }]
  },
  'section-videobg imgms-layer': {
    'height': [{ 'unit': 'vh', 'value': 100 }, { 'unit': 'string', 'value': '!important' }],
    'width': [{ 'unit': 'vw', 'value': 36 }, { 'unit': 'string', 'value': '!important' }],
    'right': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'section-videobg imgms-layeroverlay-bg': {
    'height': [{ 'unit': 'vh', 'value': 15 }, { 'unit': 'string', 'value': '!important' }],
    'width': [{ 'unit': 'vw', 'value': 100 }, { 'unit': 'string', 'value': '!important' }],
    'animation': 'top-move-right 0.5s ease-in'
  },
  'section-videobg video': {
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'width': [{ 'unit': '%H', 'value': 1.2 }],
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'maxHeight': [{ 'unit': 'vh', 'value': 100 }],
    'transform': 'translateX(-60%)'
  },
  'section-videobg topbar': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -40 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1.02 }],
    'height': [{ 'unit': 'px', 'value': 150 }],
    'transform': 'rotate(2.6deg)',
    'backgroundColor': '#ec068d',
    'opacity': '0.4',
    'animation': 'slide-down 2s ease-in-out'
  },
  'section-videobg topbar2': {
    'position': 'absolute',
    'right': [{ 'unit': 'vw', 'value': -5 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'width': [{ 'unit': 'vw', 'value': 36 }],
    'transform': 'skewX(-9deg)',
    'backgroundColor': '#EC068D',
    'animation': 'slide-left 2s ease-in-out'
  },
  'section-videobg text-con': {
    'position': 'absolute',
    'top': [{ 'unit': 'vh', 'value': 37 }],
    'right': [{ 'unit': 'vw', 'value': 9 }],
    '>w992&&<w1199': {
      'right': [{ 'unit': 'vw', 'value': 7 }]
    }
  },
  'section-videobg type-it': {
    'color': '#ffffff',
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 48 }],
    'textAlign': 'right'
  },
  'section-videobg type-it2': {
    'color': '#ffffff',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 26 }],
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 1.3 }]
  },
  'section-videobg line-box': {
    'position': 'relative'
  },
  'section-videobg line-box line': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -120 }],
    'left': [{ 'unit': 'px', 'value': -100 }],
    'width': [{ 'unit': 'px', 'value': 200 }],
    'height': [{ 'unit': 'px', 'value': 1 }],
    // Old browsers
    'background': 'linear-gradient(to right, white 50%, rgba(255, 255, 255, 0) 50%)',
    'backgroundSize': '200% 100%',
    'backgroundPosition': 'right bottom',
    'animation': 'showLine 1.8s linear',
    'transition': '2s',
    'animationFillMode': 'forwards'
  },
  'section-videobg subtitle': {
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'textAlign': 'center',
    'fontFamily': ''rsuregular'',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'section-videobg abtn': {
    'width': [{ 'unit': 'px', 'value': 350 }],
    'height': [{ 'unit': 'px', 'value': 71 }],
    'fontSize': [{ 'unit': 'px', 'value': 32 }],
    'paddingTop': [{ 'unit': 'px', 'value': 6 }],
    'marginTop': [{ 'unit': 'px', 'value': 64 }]
  },
  'cover-ie': {
    'display': 'none'
  },
  ':root cover-ie': {
    'display': 'block\9',
    'position': 'absolute\9',
    'height': [{ 'unit': 'vh', 'value': 100 }]
  },
  ':root ms-slide-bgvideo': {
    'display': 'none\9'
  },
  ':root master-slider ms-layer > h2': {
    'opacity': '1\9 !important'
  },
  'section-videobg ms-viewms-basic-view': {
    'height': [{ 'unit': 'vh', 'value': 100 }, { 'unit': 'string', 'value': '!important' }]
  },
  'section-videobg ms-viewms-basic-view > ms-slide-container > ms-slidems-sl-selected': {
    'height': [{ 'unit': 'vh', 'value': 100 }, { 'unit': 'string', 'value': '!important' }]
  },
  'section-videobg ms-slide-bgvideocont > video': {
    'height': [{ 'unit': '%V', 'value': 1.3 }, { 'unit': 'string', 'value': '!important' }],
    'width': [{ 'unit': '%H', 'value': 1.3 }, { 'unit': 'string', 'value': '!important' }],
    'top': [{ 'unit': '%V', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'left': [{ 'unit': '%H', 'value': -0.1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'section-videobg ms-slide-layers > ms-anim-layers > divms-layer': {
    'top': [{ 'unit': 'vh', 'value': 50 }, { 'unit': 'string', 'value': '!important' }],
    'right': [{ 'unit': 'vw', 'value': 8 }, { 'unit': 'string', 'value': '!important' }]
  },
  'section-videobg ms-slide-layers > ms-anim-layers > imgms-layer:first-child': {
    'animation': 'right-move-left 0.5s ease-in'
  },
  'section-videobg ms-slide-layers > ms-anim-layers > divms-layer > div > btnwhite': {
    'transition': '0.4s'
  },
  'section-videobg ms-slide-layers > ms-anim-layers > divms-layer > div > btnwhite:hover': {
    'marginTop': [{ 'unit': 'px', 'value': -10 }]
  },
  'section-videobg > arrow': {
    'position': 'absolute',
    'color': '#ffffff',
    'top': [{ 'unit': 'vh', 'value': 87 }],
    'right': [{ 'unit': 'vw', 'value': 50 }],
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'cursor': 'pointer',
    'height': [{ 'unit': 'px', 'value': 100 }],
    'width': [{ 'unit': 'px', 'value': 100 }],
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'section-videobg > arrow:hover': {
    'animation': 'MoveUpDown 1s linear infinite'
  },
  'down ms-layer iframe': {
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'section-slide': {
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'page-template-page-register note': {
    'fontFamily': ''rsuregular'',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': 'rgba(255, 255, 255, 0.5)',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'page-template-page-account note': {
    'fontFamily': ''rsuregular'',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'page-template-page-register row-note': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'page-template-page-account row-note': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'card-register': {
    'borderRadius': '10px',
    'background': '#fff'
  },
  'card-register input[type='submit']#um-submit-btn': {
    'background': '#ec068d',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'borderTopLeftRadius': '0 !important',
    'borderTopRightRadius': '0 !important',
    'borderBottomLeftRadius': '10px !important',
    'borderBottomRightRadius': '10px !important',
    'paddingTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'card-register input[type='submit']#um-submit-btndisabled': {
    'background': '#eaeaea',
    'cursor': 'not-allowed',
    'pointerEvents': 'none'
  },
  'card-register input[type='submit']#um-submit-btndisabled:hover': {
    'background': '#eaeaea',
    'cursor': 'not-allowed',
    'pointerEvents': 'none'
  },
  'card-register um-buttonum-alt': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }]
  },
  'um-118um um-form input[type='text']': {
    'background': 'rgba(236, 6, 141, 0.05) !important',
    'border': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'borderRadius': '0',
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }, { 'unit': 'string', 'value': '!important' }],
    'fontSize': [{ 'unit': 'px', 'value': 22 }, { 'unit': 'string', 'value': '!important' }],
    'color': '#222222 !important'
  },
  'um-118um um-form input[type='tel']': {
    'background': 'rgba(236, 6, 141, 0.05) !important',
    'border': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'borderRadius': '0',
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }, { 'unit': 'string', 'value': '!important' }],
    'fontSize': [{ 'unit': 'px', 'value': 22 }, { 'unit': 'string', 'value': '!important' }],
    'color': '#222222 !important'
  },
  'um-118um um-form input[type='password']': {
    'background': 'rgba(236, 6, 141, 0.05) !important',
    'border': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'borderRadius': '0',
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }, { 'unit': 'string', 'value': '!important' }],
    'fontSize': [{ 'unit': 'px', 'value': 22 }, { 'unit': 'string', 'value': '!important' }],
    'color': '#222222 !important'
  },
  'um-118um um-form textarea': {
    'background': 'rgba(236, 6, 141, 0.05) !important',
    'border': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'borderRadius': '0',
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }, { 'unit': 'string', 'value': '!important' }],
    'fontSize': [{ 'unit': 'px', 'value': 22 }, { 'unit': 'string', 'value': '!important' }],
    'color': '#222222 !important'
  },
  'um-field-arrow': {
    'display': 'none'
  },
  'um-error-block': {
    'color': '#f54b5e !important',
    'background': 'transparent !important',
    'fontFamily': ''rsuregular' !important',
    'fontSize': [{ 'unit': 'px', 'value': 18 }, { 'unit': 'string', 'value': '!important' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'margin': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'um-field-error': {
    'color': '#f54b5e !important',
    'background': 'transparent !important',
    'fontFamily': ''rsuregular' !important',
    'fontSize': [{ 'unit': 'px', 'value': 18 }, { 'unit': 'string', 'value': '!important' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'margin': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'page-template-page-login section-page-login': {
    'backgroundImage': 'url('../img/login-bg.jpg')',
    'backgroundSize': 'cover',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': '50% 50%',
    'screen&&<w768': {
      'background': '#33485e'
    }
  },
  'error404 section-page-login': {
    'backgroundImage': 'url('../img/login-bg.jpg')',
    'backgroundSize': 'cover',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': '50% 50%'
  },
  'page-template-page-login site-header': {
    'background': '#38373c'
  },
  'error404 site-header': {
    'background': '#38373c'
  },
  'page-template-page-register site-header': {
    'background': '#000'
  },
  'page-template-page-login menu current-menu-item': {
    'background': 'none'
  },
  'section-page-login': {
    'paddingTop': [{ 'unit': 'px', 'value': 50 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 150 }]
  },
  'login-area': {
    'position': 'relative'
  },
  'login-area button': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': -150 }],
    'bottom': [{ 'unit': 'px', 'value': -200 }],
    'zIndex': '2'
  },
  'login-area cloud-1': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': -50 }],
    'bottom': [{ 'unit': 'px', 'value': -200 }],
    'zIndex': '2',
    'transform': 'translatey(0px)',
    'animation': 'float-3 6s ease-in-out infinite'
  },
  'login-area cloud-2': {
    'position': 'absolute',
    'right': [{ 'unit': '%H', 'value': 0.5 }],
    'bottom': [{ 'unit': 'px', 'value': -150 }],
    'zIndex': '2',
    'transform': 'translatey(0px)',
    'animation': 'float-1 6s ease-in-out infinite'
  },
  'login-area cloud-3': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': -150 }],
    'bottom': [{ 'unit': 'px', 'value': -80 }],
    'zIndex': '2',
    'transform': 'translatey(0px)',
    'animation': 'float-2 6s ease-in-out infinite'
  },
  'login-area cloud-4': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': -175 }],
    'bottom': [{ 'unit': 'px', 'value': -15 }],
    'zIndex': '2',
    'transform': 'translatey(0px)',
    'animation': 'float-1 6s ease-in-out infinite'
  },
  'login-area rocket': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 30 }],
    'bottom': [{ 'unit': 'px', 'value': -150 }],
    'zIndex': '2',
    'transform': 'translatey(0px)',
    'animation': 'float-2 6s ease-in-out infinite'
  },
  'login-area arrow': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 250 }],
    'bottom': [{ 'unit': 'px', 'value': -200 }],
    'zIndex': '2',
    'transform': 'translatey(0px)',
    'animation': 'float-2 6s ease-in-out infinite'
  },
  'login-area arrow-2': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 200 }],
    'bottom': [{ 'unit': 'px', 'value': -100 }],
    'zIndex': '2',
    'transform': 'translatey(0px)',
    'animation': 'float-2 6s ease-in-out infinite'
  },
  'login-area arrow-3': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': -100 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '2',
    'transform': 'translatey(0px)',
    'animation': 'float-3 6s ease-in-out infinite'
  },
  'login-area arrow-4': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': -80 }],
    'bottom': [{ 'unit': 'px', 'value': 50 }],
    'zIndex': '2',
    'transform': 'translatey(0px)',
    'animation': 'float-2 6s ease-in-out infinite'
  },
  'login-area card': {
    'zIndex': '99999'
  },
  'um-icon-android-checkbox-outline': {
    'color': '#ec058d'
  },
  'section-account': {
    'paddingTop': [{ 'unit': 'px', 'value': 50 }],
    'position': 'relative'
  },
  'um-account-main divum-account-heading': {
    'fontFamily': ''rsuregular'',
    'color': '#c6127c !important'
  },
  'um-account-main label': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': '!important' }],
    'fontFamily': ''rsuregular'',
    'color': 'rgba(34, 34, 34, 0.8)',
    'fontWeight': 'normal !important'
  },
  'inputvalid:not([type])': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'inputvalid:not([type]):focus': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'input[type='text']valid:not(browser-default)': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'input[type='text']valid:not(browser-default):focus': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'input[type='password']valid:not(browser-default)': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'input[type='password']valid:not(browser-default):focus': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'input[type='email']valid:not(browser-default)': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'input[type='email']valid:not(browser-default):focus': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'input[type='url']valid:not(browser-default)': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'input[type='url']valid:not(browser-default):focus': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'input[type='time']valid:not(browser-default)': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'input[type='time']valid:not(browser-default):focus': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'input[type='date']valid:not(browser-default)': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'input[type='date']valid:not(browser-default):focus': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'input[type='datetime']valid:not(browser-default)': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'input[type='datetime']valid:not(browser-default):focus': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'input[type='datetime-local']valid:not(browser-default)': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'input[type='datetime-local']valid:not(browser-default):focus': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'input[type='tel']valid:not(browser-default)': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'input[type='tel']valid:not(browser-default):focus': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'input[type='number']valid:not(browser-default)': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'input[type='number']valid:not(browser-default):focus': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'input[type='search']valid:not(browser-default)': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'input[type='search']valid:not(browser-default):focus': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'textareamaterialize-textareavalid': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'textareamaterialize-textareavalid:focus': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'select-wrappervalid > inputselect-dropdown': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'WebkitBoxShadow': '0 2px 0 0 #ec068d',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ec068d' }]
  },
  'um-field-label label': {
    // color: rgba(34, 34, 34, 0.8);
    'color': '#c6127c',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'fontWeight': 'normal !important'
  },
  'home site-header-space': {
    'height': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'minHeight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'home site-header': {
    'background': 'transparent'
  },
  '#masthead': {
    'transition': 'all 0.3s'
  },
  'home menu current-menu-item': {
    'background': 'none'
  },
  'home menu current-menu-item a': {
    'color': '#ec068d'
  },
  'company-name': {
    'textAlign': 'center',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'welcome-text': {
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 32 }]
  },
  'welcome-text name': {
    'color': '#ec068d'
  },
  'welcome-desc': {
    'color': '#222',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'com-line': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c6127c' }],
    'width': [{ 'unit': 'px', 'value': 56 }],
    'textAlign': 'center',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'edit-company': {
    'fontFamily': ''rsuregular'',
    'color': '#ec068d',
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'gform_wrapper top_label gfield_label': {
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#222',
    'fontWeight': 'normal'
  },
  'gform_wrapper input:not([type='radio']):not([type='checkbox']):not([type='submit']):not([type='button']):not([type='image']):not([type='file'])': {
    'background': 'rgba(236, 6, 141, 0.05)',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 5 }],
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'fontFamily': ''rsuregular' !important',
    'transition': 'all 0.3s'
  },
  'gform_wrapper input:not([type='radio']):not([type='checkbox']):not([type='submit']):not([type='button']):not([type='image']):not([type='file']):focus': {
    'background': '#fff',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'gform_wrapper gform_footer inputbutton': {
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }, { 'unit': 'string', 'value': '!important' }],
    'background': '#ec068d',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '5px',
    'color': '#fff',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 25 }],
    'screen&&<w768': {
      'lineHeight': [{ 'unit': 'string', 'value': 'initial' }, { 'unit': 'string', 'value': '!important' }]
    }
  },
  'gform_wrapper gform_footer input[type='submit']': {
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }, { 'unit': 'string', 'value': '!important' }],
    'background': '#ec068d',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '5px',
    'color': '#fff',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 25 }],
    'screen&&<w768': {
      'lineHeight': [{ 'unit': 'string', 'value': 'initial' }, { 'unit': 'string', 'value': '!important' }]
    }
  },
  'gform_wrapper gform_page_footer inputbutton': {
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }, { 'unit': 'string', 'value': '!important' }],
    'background': '#ec068d',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '5px',
    'color': '#fff',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 25 }],
    'screen&&<w768': {
      'lineHeight': [{ 'unit': 'string', 'value': 'initial' }, { 'unit': 'string', 'value': '!important' }]
    }
  },
  'gform_wrapper gform_page_footer input[type='submit']': {
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }, { 'unit': 'string', 'value': '!important' }],
    'background': '#ec068d',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '5px',
    'color': '#fff',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 25 }],
    'screen&&<w768': {
      'lineHeight': [{ 'unit': 'string', 'value': 'initial' }, { 'unit': 'string', 'value': '!important' }]
    }
  },
  'gform_buttondisabled': {
    'background': '#eaeaea !important',
    'cursor': 'not-allowed'
  },
  'gform_buttondisabled:hover': {
    'background': '#eaeaea !important',
    'cursor': 'not-allowed'
  },
  'gform_wrapper gform_footer': {
    'textAlign': 'center'
  },
  'post-type-archive-product main-header': {
    'marginTop': [{ 'unit': 'px', 'value': 56 }],
    'marginBottom': [{ 'unit': 'px', 'value': 56 }]
  },
  'overlay-bg': {
    'opacity': '0.5'
  },
  'home nav ul a:hover': {
    'color': '#ec068d'
  },
  'home nav ul li:hover': {
    'background': 'none'
  },
  'parallax-container parallax': {
    'backgroundRepeat': 'repeat-y',
    'backgroundPosition': '50% 0',
    'transition': '0s linear',
    'transitionProperty': 'background-position'
  },
  'section-showcase': {
    'paddingTop': [{ 'unit': 'px', 'value': 50 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'section-products': {
    'background': 'linear-gradient(
		to bottom right,
		#fff 0%,
		#fff 50%,
		#ebeff3 50%,
		#ebeff3 100%
	)',
    'screen&&<w425': {
      'background': 'transparent',
      'marginBottom': [{ 'unit': 'px', 'value': 20 }]
    }
  },
  ':root section-products': {
    'marginBottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'products > row:last-child': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'section-showcase title': {
    'fontFamily': ''Roboto'',
    'fontWeight': 'bold',
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 32 }],
    'color': '#c6127c'
  },
  'section-showcase intro': {
    'maxWidth': [{ 'unit': 'px', 'value': 600 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'textAlign': 'center',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'color': '#222'
  },
  'section-invest title-activity': {
    'fontFamily': ''Roboto'',
    'fontWeight': 'bold',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'display': 'inline'
  },
  'section-invest point': {
    'color': '#ec068d',
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'section-invest schedule': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c6127c' }],
    'borderRadius': '4px',
    'background': '#fff',
    'marginTop': [{ 'unit': 'px', 'value': 19 }]
  },
  'section-invest schedule-row': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eaeaea' }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'section-invest schedule-row:last-child': {
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }]
  },
  'section-invest schedule-row col': {
    'paddingTop': [{ 'unit': 'rem', 'value': 0.75 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.65 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'display': 'flex',
    'alignItems': 'center',
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': '!important' }]
  },
  'section-invest schedule-row cols4': {
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eaeaea' }]
  },
  'section-invest row col': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'section-invest row col > parallax-container': {
    'height': [{ 'unit': 'px', 'value': 400 }]
  },
  'schedule-row time': {
    'color': '#c6127c',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    '<w991': {
      'fontSize': [{ 'unit': 'px', 'value': 16 }]
    }
  },
  'schedule-row program': {
    'color': '#222',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  'schedule-row badgenew': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'purple': {
    'background': '#5502af !important'
  },
  'green': {
    'background': '#00a68e !important'
  },
  'spanbadge': {
    'float': 'none',
    'display': 'inline-block',
    'lineHeight': [{ 'unit': 'string', 'value': 'inherit' }]
  },
  'tooltip': {
    'position': 'relative',
    'display': 'inline-block'
  },
  'tooltip tooltiptext': {
    'visibility': 'hidden',
    'width': [{ 'unit': 'px', 'value': 220 }],
    'backgroundColor': '#34495e',
    'color': '#fff',
    'textAlign': 'left',
    'borderRadius': '6px',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }],
    'position': 'absolute',
    'zIndex': '1',
    'top': [{ 'unit': '%V', 'value': 1.1 }],
    'left': [{ 'unit': '%H', 'value': 0.25 }],
    'marginLeft': [{ 'unit': 'px', 'value': -60 }],
    'opacity': '0',
    'transition': 'all 0.5s'
  },
  'tooltip tooltiptext::after': {
    'content': '''',
    'position': 'absolute',
    'bottom': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginLeft': [{ 'unit': 'px', 'value': -5 }],
    'borderWidth': '5px',
    'borderStyle': 'solid',
    'borderColor': 'transparent transparent #34495e transparent'
  },
  'tooltip:hover tooltiptext': {
    'visibility': 'visible',
    'opacity': '1'
  },
  'tooltiptext name': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  'tooltiptext com': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'display': 'inline-block',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'tooltiptext desc': {
    'fontFamily': ''THSarabunNew'',
    'fontSize': [{ 'unit': 'px', 'value': 13 }]
  },
  'owl-carousel': {
    'position': 'relative'
  },
  ':root owl-carousel': {
    'display': 'table\9'
  },
  'owl-prev': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'px', 'value': -10 }]
  },
  'owl-next': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'px', 'value': -10 }]
  },
  'owl-carousel div': {
    'textAlign': 'center'
  },
  ':root owl-carousel div': {
    'display': 'table-cell\9'
  },
  'owl-nav i': {
    'color': '#ec068d',
    'fontSize': [{ 'unit': 'px', 'value': 22 }]
  },
  'section-banner': {
    'paddingTop': [{ 'unit': 'px', 'value': 50 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'section-banner row': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'owl-carousel owl-item img': {
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  ':root owl-carousel div img': {
    'marginTop': [{ 'unit': 'px', 'value': 50 }]
  },
  'error404 section-page-login title': {
    'color': '#fff',
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 96 }],
    'marginTop': [{ 'unit': 'px', 'value': 50 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'error404 section-page-login desc': {
    'fontFamily': ''rsuregular'',
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'textAlign': 'center'
  },
  'section-videomobile title': {
    'color': '#fff',
    'fontFamily': ''rsubold''
  },
  'section-videomobile subtitle': {
    'color': '#fff',
    'fontFamily': ''rsuregular''
  },
  'section-videomobile': {
    'paddingTop': [{ 'unit': 'px', 'value': 80 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 30 }],
    'backgroundSize': 'cover',
    'backgroundPosition': '50% 50%',
    'backgroundRepeat': 'no-repeat'
  },
  'section-introregister': {
    'textAlign': 'center',
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': 'cover',
    'backgroundPosition': '50% 50%',
    'marginBottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'section-introregister > overlay': {
    'background': 'rgba(16, 36, 66, 0.9)',
    'paddingTop': [{ 'unit': 'px', 'value': 175 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 100 }],
    '<w767': {
      'paddingTop': [{ 'unit': 'px', 'value': 100 }],
      'paddingBottom': [{ 'unit': 'px', 'value': 50 }]
    }
  },
  'section-introregister > overlay > container > title': {
    'color': '#c6127c',
    'fontSize': [{ 'unit': 'px', 'value': 56 }],
    'fontFamily': ''rsubold''
  },
  'section-introregister desc': {
    'maxWidth': [{ 'unit': 'px', 'value': 740 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'color': '#fff',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'page-template-page-register site-header-space': {
    'height': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }],
    'minHeight': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }]
  },
  'page-template-page-register site-header': {
    'background': '#000'
  },
  'section-register': {
    'position': 'relative',
    'paddingTop': [{ 'unit': 'px', 'value': 100 }]
  },
  'section-register bank': {
    'position': 'absolute',
    'zIndex': '-1',
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'section-account bank': {
    'position': 'absolute',
    'zIndex': '-1',
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'section-register coin': {
    'position': 'absolute',
    'zIndex': '-1',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'section-account coin': {
    'position': 'absolute',
    'zIndex': '-1',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'card-border': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#34495e' }]
  },
  'card card-content card-title': {
    'marginBottom': [{ 'unit': 'px', 'value': 25 }],
    'fontFamily': ''rsubold'',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eaeaea' }],
    'fontSize': [{ 'unit': 'px', 'value': 28 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'card card-title img': {
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'card-titlecalendar': {
    'backgroundImage': 'url('../img/calendar-icon.png')',
    'backgroundRepeat': 'no-repeat',
    'paddingLeft': [{ 'unit': 'px', 'value': 30 }],
    'backgroundPosition': '0 25%'
  },
  'card-titleproduct': {
    'backgroundImage': 'url('../img/product-icon.png')',
    'backgroundRepeat': 'no-repeat',
    'paddingLeft': [{ 'unit': 'px', 'value': 30 }],
    'backgroundPosition': '0 25%'
  },
  'card-content comingsoon': {
    'color': '#a4a4a4',
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 24 }]
  },
  'card-content product-desc': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'card-marketplace card-content': {
    'height': [{ 'unit': 'px', 'value': 454 }]
  },
  'category-event entry-title': {
    'fontFamily': ''rsubold'',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }]
  },
  'category-event entry-title a': {
    'color': '#222'
  },
  'body': {
    'background': '#ffffff'
  },
  'act-btn': {
    'height': [{ 'unit': 'px', 'value': 32 }],
    'width': [{ 'unit': 'px', 'value': 120 }],
    'background': '#ec068d',
    'borderRadius': '5px',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'color': '#ffffff',
    'cursor': 'pointer',
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }]
  },
  'act-btn:hover': {
    'background': '#f038a4'
  },
  'act-counter': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    '<w767': {
      'height': [{ 'unit': 'string', 'value': 'auto' }]
    }
  },
  'counter': {
    'background': '#f4f4f4',
    'height': [{ 'unit': 'px', 'value': 140 }],
    'borderRadius': '10px',
    'display': 'flex',
    'flexDirection': 'row',
    'justifyContent': 'space-around',
    'alignItems': 'center',
    'order': '1',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'counter > counterBox': {
    'display': 'flex',
    'flexDirection': 'column',
    'width': [{ 'unit': '%H', 'value': 0.25 }]
  },
  ':root counter > counterBox': {
    'display': 'inline-block\9',
    'float': 'left\9',
    'marginTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'counter > counterBox > time': {
    'display': 'flex',
    'flexDirection': 'row',
    'justifyContent': 'center'
  },
  'counter > counterBox > time > box': {
    'background': '#ffffff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eaeaea' }],
    'height': [{ 'unit': 'px', 'value': 56 }],
    'width': [{ 'unit': '%H', 'value': 0.45 }],
    'maxWidth': [{ 'unit': 'px', 'value': 40 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 2 }],
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 40 }],
    'color': '#ec068d'
  },
  ':root counter > counterBox > time > box': {
    'display': 'inline-block\9',
    'paddingTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'counter > counterBox > unit': {
    'display': 'flex',
    'justifyContent': 'center',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'color': '#34495e',
    'marginTop': [{ 'unit': 'px', 'value': 5 }]
  },
  'act-img': {
    'width': [{ 'unit': '%H', 'value': 0.48 }],
    'order': '3'
  },
  'act-detail': {
    'width': [{ 'unit': '%H', 'value': 0.48 }],
    'order': '2'
  },
  'act-detail > text': {
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 28 }],
    'textAlign': 'center',
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.4 }]
  },
  'act-table': {
    'background': '#fafafa'
  },
  'act-table td': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e1e4e7' }],
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'padding': [{ 'unit': 'px', 'value': 32 }, { 'unit': 'px', 'value': 32 }, { 'unit': 'px', 'value': 32 }, { 'unit': 'px', 'value': 32 }]
  },
  'act-table td:first-child': {
    'maxWidth': [{ 'unit': 'px', 'value': 100 }],
    'width': [{ 'unit': 'px', 'value': 125 }],
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'act-table td > a > chk-arrow': {
    'color': '#ec068d',
    'float': 'right',
    'marginTop': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': 'px', 'value': 50 }]
  },
  'act-table td > a > chk-arrow move': {
    'animation': 'MoveRight 0.8s linear',
    'animationFillMode': 'forwards'
  },
  'act-table act-btn': {
    'float': 'right'
  },
  'a > act-prev': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'marginTop': [{ 'unit': 'px', 'value': 30 }],
    'color': '#222222 !important'
  },
  'a > act-prev:hover': {
    'color': '#222222'
  },
  'act-prev fa-arrow-left': {
    'color': '#ec068d',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'act-text': {
    'color': '#222222',
    'float': 'left',
    'cursor': 'pointer'
  },
  'act-text:hover': {
    'color': '#222222'
  },
  'act-tag': {
    'height': [{ 'unit': 'px', 'value': 24 }],
    'width': [{ 'unit': 'px', 'value': 80 }],
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#ffffff',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'borderRadius': '2px',
    'float': 'left',
    'marginLeft': [{ 'unit': 'px', 'value': 15 }]
  },
  'act-taggreen': {
    'background': '#00a68e !important'
  },
  'act-tagblue': {
    'background': '#5502af !important'
  },
  'articletype-postcategory-event': {
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }]
  },
  'category-event site-content': {
    'position': 'relatvie'
  },
  'category-event chart-1': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': '%V', 'value': 0.35 }],
    'zIndex': '-1'
  },
  'page-template-page-past-event chart-1': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': '%V', 'value': 0.35 }],
    'zIndex': '-1'
  },
  'category-event chart-2': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': '%V', 'value': 0.4 }],
    'zIndex': '-1'
  },
  'page-template-page-past-event chart-2': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': '%V', 'value': 0.4 }],
    'zIndex': '-1'
  },
  // Checkup
  'btn-pink': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'background': '#ec068d',
    'borderRadius': '5px',
    'height': [{ 'unit': 'px', 'value': 44 }],
    'width': [{ 'unit': 'px', 'value': 133 }],
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'color': '#ffffff',
    '<w767': {
      'position': 'fixed',
      'bottom': [{ 'unit': 'px', 'value': 0 }],
      'left': [{ 'unit': 'px', 'value': 0 }],
      'width': [{ 'unit': '%H', 'value': 1 }],
      'borderRadius': '0px'
    }
  },
  ':root btn-pink': {
    'display': 'block\0',
    'margin': [{ 'unit': 'string', 'value': 'auto\0' }, { 'unit': 'string', 'value': 'auto\0' }, { 'unit': 'string', 'value': 'auto\0' }, { 'unit': 'string', 'value': 'auto\0' }],
    'textAlign': 'center\0',
    'paddingTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'btn-pink:hover': {
    'background': '#c6127c',
    'color': '#ffffff'
  },
  'btn-pinkdisabled': {
    'background': '#eaeaea',
    'cursor': 'not-allowed'
  },
  'btn-pinkdisabled:hover': {
    'background': '#eaeaea',
    'cursor': 'not-allowed'
  },
  'chk-cover': {
    'backgroundSize': 'cover',
    'backgroundPosition': 'center',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'flexDirection': 'column'
  },
  'chk-coverfirstpage': {
    'backgroundImage': 'url('../img/cover.png')',
    'height': [{ 'unit': 'px', 'value': 500 }]
  },
  'chk-coverpersonal': {
    'backgroundImage': 'url('../img/cover-personal.png')'
  },
  'chk-covercorporate': {
    'backgroundImage': 'url('../img/cover-corporate.png')'
  },
  'chk-coverresult': {
    'backgroundImage': 'url('../img/cover-result.png')'
  },
  'chk-cover-title': {
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 62 }],
    'color': '#ffffff'
  },
  ':root chk-cover-title': {
    'display': 'none\0'
  },
  'chk-cover-titlespace': {
    'marginBottom': [{ 'unit': 'px', 'value': 110 }]
  },
  'chk-cover > subtitle': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 28 }],
    'color': '#ffffff',
    'textAlign': 'center'
  },
  'chk-cover > button': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ffffff' }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 16 }],
    'borderRadius': '5px',
    'cursor': 'pointer',
    'transition': '0.2s',
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#ffffff',
    'textAlign': 'center'
  },
  'asterisk > button': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ffffff' }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 16 }],
    'borderRadius': '5px',
    'cursor': 'pointer',
    'transition': '0.2s',
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#ffffff',
    'textAlign': 'center'
  },
  'asterisk > buttonbtn-grey': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eaeaea' }],
    'color': '#222222',
    'height': [{ 'unit': 'px', 'value': 35 }],
    'width': [{ 'unit': 'px', 'value': 120 }]
  },
  'asterisk > buttonbtn-greyspace': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.08 }]
  },
  'chk-cover > button:hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'color': '#ec068d'
  },
  'asterisk > button:hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'color': '#ec068d'
  },
  ':root asterisk > buttonbtn-grey': {
    'display': 'inline-block\0'
  },
  'chk-cover > buttonresult': {
    'display': 'none'
  },
  'chk-cover > button > fa-share-alt': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'marginRight': [{ 'unit': 'px', 'value': 8 }]
  },
  'asterisk > button > fa-share-alt': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'marginRight': [{ 'unit': 'px', 'value': 8 }]
  },
  'chk-block': {
    'background': '#ffffff',
    'margin': [{ 'unit': 'vh', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'vh', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }],
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 928 }],
    'borderRadius': '5px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#eaeaea' }],
    'position': 'relative',
    '<w1200': {
      'minHeight': [{ 'unit': 'string', 'value': 'auto' }],
      'width': [{ 'unit': '%H', 'value': 0.95 }]
    },
    '<w991': {
      'minHeight': [{ 'unit': 'string', 'value': 'auto' }],
      'width': [{ 'unit': '%H', 'value': 0.95 }]
    }
  },
  'chk-block gform_previous_button': {
    'position': 'absolute !important',
    'top': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': '!important' }],
    'left': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': '!important' }],
    'background': 'transparent !important',
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }, { 'unit': 'string', 'value': '!important' }],
    'width': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'string', 'value': '!important' }],
    'color': '#ec068d !important'
  },
  // .chk-block.firstpage {
	margin: -200px auto 76px;
}
  ':root chk-block recommend material-icons': {
    'display': 'none\0'
  },
  'chk-pages': {
    'display': 'flex'
  },
  'chk-arrow': {
    'width': [{ 'unit': '%H', 'value': 0.3333 }],
    'color': '#ec068d',
    'cursor': 'pointer',
    'transition': '0.2s'
  },
  'chk-arrow:hover': {
    'color': '#c6127c'
  },
  'chk-page': {
    'width': [{ 'unit': '%H', 'value': 0.3333 }],
    'textAlign': 'center',
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'chk-number': {
    'color': '#c6127c'
  },
  'chk-block > title': {
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 28 }],
    'textAlign': 'center',
    'marginTop': [{ 'unit': 'px', 'value': 50 }]
  },
  'chk-blockslide-go': {
    'animation': 'chk-slide-go 0.5s ease-out',
    'animationFillMode': 'forwards'
  },
  'chk-blockslide-back': {
    'animation': 'chk-slide-back 0.5s ease-in',
    'animationFillMode': 'forwards'
  },
  'chk-select-1': {
    'display': 'flex',
    'justifyContent': 'center'
  },
  ':root chk-select-1': {
    'textAlign': 'center\0'
  },
  'chk-select-1 > item': {
    'height': [{ 'unit': 'px', 'value': 230 }],
    'width': [{ 'unit': 'px', 'value': 207 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eaeaea' }],
    'borderRadius': '5px',
    'margin': [{ 'unit': 'px', 'value': 57 }, { 'unit': 'px', 'value': 57 }, { 'unit': 'px', 'value': 57 }, { 'unit': 'px', 'value': 57 }],
    'cursor': 'pointer',
    'transition': '0.2s',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'textAlign': 'center'
  },
  ':root chk-select-1 > item': {
    'display': 'inline-block\0'
  },
  'chk-select-1 > item:hover': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'color': '#ec068d'
  },
  'chk-select-1 > itemselected': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'color': '#ec068d'
  },
  'chk-select-1 > item > fa-check': {
    'float': 'right',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'transition': '0.2s'
  },
  'chk-select-1 > item > img': {
    'backgroundSize': 'contain',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'center',
    'height': [{ 'unit': '%V', 'value': 0.5 }],
    'margin': [{ 'unit': '%V', 'value': 0.2 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': '%V', 'value': 0.1 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'chk-personal': {
    'backgroundImage': 'url('../img/personal.png')'
  },
  'chk-corporate': {
    'backgroundImage': 'url('../img/corporate.png')'
  },
  'chk-radio': {
    'textAlign': 'center',
    'marginTop': [{ 'unit': 'px', 'value': 13 }]
  },
  'chk-select-2': {
    'display': 'flex',
    'justifyContent': 'center'
  },
  'business_type': {
    'display': 'flex',
    'flexFlow': 'row wrap',
    'justifyContent': 'space-around',
    'maxWidth': [{ 'unit': 'px', 'value': 600 }]
  },
  'business_type > item': {
    'display': 'block',
    'height': [{ 'unit': 'px', 'value': 223 }],
    'width': [{ 'unit': 'px', 'value': 160 }],
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 16 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eaeaea' }],
    'borderRadius': '5px',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'textAlign': 'center',
    'color': '#000000',
    'transition': '0.2s',
    'cursor': 'pointer',
    'position': 'relative'
  },
  'business_type > item:hover': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'color': '#ec068d !important'
  },
  'business_type > itemselected': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'color': '#ec068d !important'
  },
  'business_type > item > fa-check': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 10 }],
    'right': [{ 'unit': 'px', 'value': 10 }],
    'transition': '0.2s'
  },
  'business_type > itemother': {
    'height': [{ 'unit': 'px', 'value': 50 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'business_type > item > img': {
    'height': [{ 'unit': 'px', 'value': 100 }],
    'margin': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }],
    'display': 'flex',
    'clear': 'both'
  },
  'chk-select-3': {
    'display': 'flex',
    'justifyContent': 'center',
    'margin': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 96 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'chk-select-3 > items': {
    'display': 'flex',
    'flexDirection': 'row',
    'justifyContent': 'center'
  },
  'chk-select-3 > items > item': {
    'height': [{ 'unit': 'px', 'value': 46 }],
    'width': [{ 'unit': 'px', 'value': 140 }],
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c4c4c4' }],
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'cursor': 'pointer',
    'transition': '0.2s'
  },
  'chk-select-3 items item:hover': {
    'background': '#ec068d',
    'borderColor': '#ec068d',
    'color': '#ffffff'
  },
  'chk-select-3 > items > itemselected': {
    'background': '#ec068d',
    'borderColor': '#ec068d',
    'color': '#ffffff'
  },
  'chk-select-3 > items > item:first-child': {
    'borderTopLeftRadius': '5px',
    'borderBottomLeftRadius': '5px'
  },
  'chk-select-3 > items > item:last-child': {
    'borderTopRightRadius': '5px',
    'borderBottomRightRadius': '5px'
  },
  'chk-select-3 > items > item > fa-check': {
    'display': 'none'
  },
  'chk-select-4': {
    'display': 'flex',
    'justifyContent': 'flex-end',
    'margin': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 60 }, { 'unit': 'string', 'value': 'auto' }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eaeaea' }],
    'borderRadius': '5px',
    'height': [{ 'unit': 'px', 'value': 56 }],
    'width': [{ 'unit': 'px', 'value': 544 }],
    'maxWidth': [{ 'unit': '%H', 'value': 0.9 }]
  },
  'chk-select-4 > input': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 28 }, { 'unit': 'string', 'value': '!important' }],
    'color': '#ec068d',
    'textAlign': 'right',
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'paddingTop': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': '!important' }],
    'width': [{ 'unit': '%H', 'value': 0.8 }, { 'unit': 'string', 'value': '!important' }]
  },
  'chk-select-4 > input:focus': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }]
  },
  'chk-select-4 > baht': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'display': 'flex',
    'alignItems': 'center',
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 20 }]
  },
  'chk-select-5': {
    'display': 'flex',
    'flexDirection': 'column',
    'margin': [{ 'unit': 'px', 'value': 36 }, { 'unit': 'px', 'value': 36 }, { 'unit': 'px', 'value': 36 }, { 'unit': 'px', 'value': 36 }]
  },
  'chk-select-5 > percent': {
    'display': 'flex',
    'justifyContent': 'center',
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'color': '#ec068d'
  },
  'chk-select-5 > input': {
    'display': 'flex',
    'justifyContent': 'center',
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'margin': [{ 'unit': 'px', 'value': 45 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'chk-select-6': {
    'display': 'flex',
    'justifyContent': 'flex-start',
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': 'px', 'value': 544 }],
    'maxWidth': [{ 'unit': '%H', 'value': 0.9 }]
  },
  'chk-select-6 > ul > li': {
    'marginTop': [{ 'unit': 'px', 'value': 24 }]
  },
  'chk-select-6 > ul > li > label': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }, { 'unit': 'string', 'value': '!important' }],
    'color': '#000000'
  },
  'chk-select-7': {
    'display': 'flex',
    'justifyContent': 'center',
    'margin': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'chk-select-7 > items': {
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center'
  },
  'chk-select-7 > items > item': {
    'height': [{ 'unit': 'px', 'value': 46 }],
    'width': [{ 'unit': 'px', 'value': 400 }],
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c4c4c4' }],
    'borderRadius': '5px',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }],
    'display': 'flex',
    'justifyContent': 'space-between',
    'alignItems': 'center',
    'cursor': 'pointer',
    'transition': '0.2s'
  },
  'chk-select-7 items item:hover': {
    'background': '#ffffff',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'color': '#ec068d'
  },
  'chk-select-7 items selected': {
    'background': '#ffffff',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'color': '#ec068d'
  },
  'chk-select-7 > items > item > fa-check': {
    'display': 'block',
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'chk-block > asterisk': {
    'display': 'flex',
    'justifyContent': 'space-between'
  },
  'chk-block > asterisk > label': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  ':root chk-block > asterisk > label': {
    'float': 'left\0'
  },
  'chk-blockresult': {
    'marginBottom': [{ 'unit': 'px', 'value': 100 }]
  },
  'chk-block > result': {
    'display': 'flex',
    'justifyContent': 'center',
    'flexDirection': 'column'
  },
  'chk-block > result > img': {
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }]
  },
  'chk-block > result > title': {
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 28 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }]
  },
  'chk-block > result > title > span': {
    'color': '#ccdc36'
  },
  'chk-block > result > subtitle': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'margin': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 16 }, { 'unit': 'string', 'value': 'auto' }],
    'textAlign': 'center'
  },
  'chk-block > recommend': {
    'margin': [{ 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': 60 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 60 }]
  },
  'chk-block > recommend > head': {
    'display': 'flex',
    'flexDirection': 'row',
    'width': [{ 'unit': 'px', 'value': 34 }],
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 28 }]
  },
  'chk-block > recommend > head > img': {
    'height': [{ 'unit': 'px', 'value': 32 }],
    'width': [{ 'unit': 'px', 'value': 34 }],
    'margin': [{ 'unit': 'px', 'value': -2 }, { 'unit': 'px', 'value': 13 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }]
  },
  'chk-block > recommend > boxs': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#000000' }],
    'borderRadius': '5px',
    'background': '#fafafa',
    'margin': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 16 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'chk-block > recommend > boxs > ul': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'chk-block > recommend > boxs > ul > li': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#000000' }],
    'padding': [{ 'unit': 'px', 'value': 32 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 32 }, { 'unit': 'px', 'value': 40 }]
  },
  'chk-block > recommend > boxs > ul > li > title': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'cursor': 'pointer'
  },
  'chk-block > recommend > boxs > ul > li > title > i': {
    'color': '#ec068d',
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'transform': 'rotate(0deg)',
    'transitionDuration': '0.2s'
  },
  'chk-block > recommend > boxs > ul > li > title > irotate': {
    'transform': 'rotate(90deg)',
    'transitionDuration': '0.2s'
  },
  'collapsible irotate': {
    'transform': 'rotate(90deg)',
    'transitionDuration': '0.2s'
  },
  'chk-block > recommend > boxs > ul > li:first-child': {
    'borderTop': [{ 'unit': 'string', 'value': 'none' }]
  },
  'chk-block gform_previous_button': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 30 }],
    'left': [{ 'unit': 'px', 'value': 30 }],
    'background': 'transparent !important',
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }, { 'unit': 'string', 'value': '!important' }],
    'width': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'string', 'value': '!important' }],
    'color': '#ec068d !important'
  },
  'checkup-back': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 30 }],
    'left': [{ 'unit': 'px', 'value': 30 }],
    'background': 'transparent !important',
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }, { 'unit': 'string', 'value': '!important' }],
    'width': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'string', 'value': '!important' }],
    'color': '#ec068d !important'
  },
  'chk-block gform_previous_button': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 70 }],
    'top': [{ 'unit': '%V', 'value': 0.09 }]
  },
  ':root chk-block gform_previous_button': {
    'left': [{ 'unit': 'string', 'value': 'auto\0' }],
    'top': [{ 'unit': '%V', 'value': 0.18 }]
  },
  'chk-block gform_page_footer > img': {
    'display': 'none'
  },
  'chk-block gform_next_button': {
    'borderRadius': '5px',
    'transition': '0.2s',
    'width': [{ 'unit': 'px', 'value': 135 }, { 'unit': 'string', 'value': '!important' }]
  },
  'chk-block gform_next_button:hover': {
    'background': '#e93ba1 !important'
  },
  'chk-block gform_next_buttondisabled': {
    'background': '#eaeaea !important',
    'cursor': 'not-allowed'
  },
  'chk-block gform_next_buttondisabled:hover': {
    'background': '#eaeaea !important',
    'cursor': 'not-allowed'
  },
  'chk-rcm-content': {
    'fontFamily': ''THSarabunNew'',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'overflow': 'hidden',
    'transition': '1s ease-out',
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'maxHeight': [{ 'unit': 'px', 'value': 1000 }]
  },
  'chk-rcm-contentcollapsed': {
    'maxHeight': [{ 'unit': 'px', 'value': 0 }]
  },
  'chk-rcm-content > wrapper': {
    'fontFamily': ''rsuregular'',
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eaeaea' }],
    'marginTop': [{ 'unit': 'px', 'value': 36 }],
    'paddingTop': [{ 'unit': 'px', 'value': 32 }]
  },
  'chk-rcm-content > wrapper > head': {
    'display': 'flex',
    'alignItems': 'center'
  },
  'chk-rcm-content > wrapper > head > h3': {
    'flex': '1',
    'display': 'inline',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  'chk-rcm-content > wrapper > head > h3 > span': {
    'color': '#ec068d',
    'fontSize': [{ 'unit': 'px', 'value': 22 }]
  },
  'chk-rcm-content > wrapper > head > btn-more': {
    'height': [{ 'unit': 'px', 'value': 30 }],
    'width': [{ 'unit': 'px', 'value': 100 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'borderRadius': '5px',
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'display': 'inline-flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'color': '#ec068d',
    'cursor': 'pointer',
    'transition': '0.2s'
  },
  'chk-rcm-content > wrapper > head > btn-more:hover': {
    'background': '#ec068d',
    'color': '#ffffff'
  },
  'chk-rcm-content > wrapper > subhead': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'marginBottom': [{ 'unit': 'px', 'value': 18 }]
  },
  'chk-rcm-content > wrapper > more-link': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'chk-rcm-content > wrapper > more-link > btn-more': {
    'height': [{ 'unit': 'px', 'value': 30 }],
    'width': [{ 'unit': 'px', 'value': 100 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eaeaea' }],
    'borderRadius': '5px',
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'display': 'inline-flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'color': '#ec068d',
    'cursor': 'pointer',
    'transition': '0.2s'
  },
  'chk-rcm-content > wrapper > more-link > btn-more:hover': {
    'background': '#ec068d',
    'color': '#ffffff'
  },
  'chk-rcm-content > wrapper > ul > li': {
    'display': 'flex',
    'marginBottom': [{ 'unit': 'px', 'value': 24 }]
  },
  'chk-rcm-content > wrapper > ul > li > img': {
    'height': [{ 'unit': 'px', 'value': 100 }],
    'marginRight': [{ 'unit': 'px', 'value': 24 }]
  },
  'chk-rcm-content > wrapper > ul > li > content > title': {
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 21 }],
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'chk-rcm-content > wrapper > ul > li > content > detail': {
    'fontFamily': ''THSarabunNew'',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'chk-rcm-content > wrapper > ul > li > content > credit': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#ec068d'
  },
  'chk-rcm-content > wrapper > more': {
    'color': '#ec068d'
  },
  'checkup-bg': {
    'backgroundImage': 'url(../img/bg-checkup.jpg)',
    'backgroundSize': 'cover',
    'backgroundPosition': 'center',
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'checkup-bg-result': {
    'backgroundImage': 'url(../img/bg-checkup.jpg)',
    'backgroundSize': 'contain',
    'backgroundPosition': 'center',
    'backgroundPositionY': '0',
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'gform_wrapper gf_progressbar': {
    'display': 'none'
  },
  '#input_2_4 li': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.3 }],
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': '%H', 'value': 0.015 }, { 'unit': 'string', 'value': '!important' }, { 'unit': '%H', 'value': 0.015 }],
    'position': 'relative',
    'textAlign': 'center'
  },
  '#input_3_4 li': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.3 }],
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': '%H', 'value': 0.015 }, { 'unit': 'string', 'value': '!important' }, { 'unit': '%H', 'value': 0.015 }],
    'position': 'relative',
    'textAlign': 'center'
  },
  '#input_2_4 li input[type='checkbox']:checked + label': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'color': '#ec068d !important'
  },
  '#input_2_4 li input[type='radio']:checked + label': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'color': '#ec068d !important'
  },
  '#input_3_4 li input[type='checkbox']:checked + label': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'color': '#ec068d !important'
  },
  '#input_3_4 li input[type='radio']:checked + label': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'color': '#ec068d !important'
  },
  '#input_2_4 li label:before': {
    'display': 'none'
  },
  '#input_2_4 li label:after': {
    'display': 'none'
  },
  '#input_3_4 li label:before': {
    'display': 'none'
  },
  '#input_3_4 li label:after': {
    'display': 'none'
  },
  '#input_2_4 li label': {
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }, { 'unit': 'string', 'value': '!important' }],
    'textAlign': 'center',
    'color': '#000000',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eaeaea' }],
    'borderRadius': '5px',
    'transition': '0.2s',
    'cursor': 'pointer',
    'padding': [{ 'unit': '%V', 'value': 0.15 }, { 'unit': '%H', 'value': 0.1 }, { 'unit': '%V', 'value': 0.1 }, { 'unit': '%H', 'value': 0.1 }, { 'unit': 'string', 'value': '!important' }],
    'minHeight': [{ 'unit': 'px', 'value': 282 }]
  },
  '#input_3_4 li label': {
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }, { 'unit': 'string', 'value': '!important' }],
    'textAlign': 'center',
    'color': '#000000',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eaeaea' }],
    'borderRadius': '5px',
    'transition': '0.2s',
    'cursor': 'pointer',
    'padding': [{ 'unit': '%V', 'value': 0.15 }, { 'unit': '%H', 'value': 0.1 }, { 'unit': '%V', 'value': 0.1 }, { 'unit': '%H', 'value': 0.1 }, { 'unit': 'string', 'value': '!important' }],
    'minHeight': [{ 'unit': 'px', 'value': 282 }]
  },
  '#input_2_4 li label img': {
    'maxWidth': [{ 'unit': 'px', 'value': 125 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  '#input_3_4 li label img': {
    'maxWidth': [{ 'unit': 'px', 'value': 125 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'gform_wrapper ulgfield_checkbox li input[type='checkbox']:checked + label': {
    'fontWeight': 'normal !important'
  },
  'gform_wrapper ulgfield_radio li input[type='radio']:checked + label': {
    'fontWeight': 'normal !important'
  },
  'chk-block gfieldfield_sublabel_belowfield_description_below': {
    'textAlign': 'center'
  },
  'chk-block gfieldfield_sublabel_belowfield_description_below label': {
    'fontSize': [{ 'unit': 'px', 'value': 28 }]
  },
  'gform_wrapper gform_page_footer': {
    'borderTop': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'textAlign': 'center',
    'width': [{ 'unit': '%H', 'value': 1 }, { 'unit': 'string', 'value': '!important' }],
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'gform_wrapper gf_progressbar_wrapper h3gf_progressbar_title': {
    'textAlign': 'center',
    'fontFamily': ''rsuregular'',
    'color': '#222',
    'fontSize': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': '!important' }],
    'opacity': '1 !important',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#input_2_5 li': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.2 }]
  },
  '#input_3_5 li': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.2 }]
  },
  '#input_2_5 li label': {
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'fontFamily': ''rsuregular'',
    'color': '#222',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dbdbdb' }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center'
  },
  '#input_3_5 li label': {
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'fontFamily': ''rsuregular'',
    'color': '#222',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dbdbdb' }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center'
  },
  '#input_2_5 li input[type='checkbox']:checked + label': {
    'background': '#ec068d',
    'borderColor': '#ec068d',
    'color': '#fff'
  },
  '#input_2_5 li input[type='radio']:checked + label': {
    'background': '#ec068d',
    'borderColor': '#ec068d',
    'color': '#fff'
  },
  '#input_3_5 li input[type='checkbox']:checked + label': {
    'background': '#ec068d',
    'borderColor': '#ec068d',
    'color': '#fff'
  },
  '#input_3_5 li input[type='radio']:checked + label': {
    'background': '#ec068d',
    'borderColor': '#ec068d',
    'color': '#fff'
  },
  '#input_2_5 li label:before': {
    'display': 'none'
  },
  '#input_2_5 li label:after': {
    'display': 'none'
  },
  '#input_3_5 li label:before': {
    'display': 'none'
  },
  '#input_3_5 li label:after': {
    'display': 'none'
  },
  'noUi-horizontal': {
    'height': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  '#gsfslider_14 noUi-handle': {
    'top': [{ 'unit': 'px', 'value': -11 }, { 'unit': 'string', 'value': '!important' }],
    'width': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': '!important' }],
    'height': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': '!important' }],
    'borderRadius': '50%',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'background': '#ec058d'
  },
  '#gsfslider_29noUi-horizontal noUi-handle': {
    'top': [{ 'unit': 'px', 'value': -11 }, { 'unit': 'string', 'value': '!important' }],
    'width': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': '!important' }],
    'height': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': '!important' }],
    'borderRadius': '50%',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'background': '#ec058d'
  },
  '#gsfslider_30noUi-horizontal noUi-handle': {
    'top': [{ 'unit': 'px', 'value': -11 }, { 'unit': 'string', 'value': '!important' }],
    'width': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': '!important' }],
    'height': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': '!important' }],
    'borderRadius': '50%',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'background': '#ec058d'
  },
  '#gsfslider_14': {
    'display': 'none'
  },
  '#gsfslider_29 noUi-handle:before': {
    'display': 'none'
  },
  '#gsfslider_30 noUi-handle:before': {
    'display': 'none'
  },
  '#gsfslider_14': {
    'display': 'none'
  },
  '#gsfslider_29 noUi-handle:after': {
    'display': 'none'
  },
  '#gsfslider_30 noUi-handle:after': {
    'display': 'none'
  },
  '#gsfslider_14': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#ec058d',
    'background': 'none',
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  '#gsfslider_29 noUi-tooltip': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#ec058d',
    'background': 'none',
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  '#gsfslider_30 noUi-tooltip': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#ec058d',
    'background': 'none',
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  '#gsfslider_13': {
    'content': ''%'',
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  '#gsfslider_14': {
    'content': ''%'',
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  '#gsfslider_29 noUi-tooltip:after': {
    'content': ''%'',
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  '#gsfslider_30 noUi-tooltip:after': {
    'content': ''%'',
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  '#post-365 gform_wrapper gf_progressbar_wrapper h3gf_progressbar_title': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  '#gform_wrapper_2 gform_wrapper ulgform_fields ligfield': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }]
  },
  '#input_2_20': {
    'maxWidth': [{ 'unit': 'px', 'value': 500 }],
    'textAlign': 'left',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  '#input_3_20': {
    'maxWidth': [{ 'unit': 'px', 'value': 500 }],
    'textAlign': 'left',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  '#input_2_27': {
    'maxWidth': [{ 'unit': 'px', 'value': 500 }],
    'textAlign': 'left',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  '#input_3_27': {
    'maxWidth': [{ 'unit': 'px', 'value': 500 }],
    'textAlign': 'left',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  '#input_2_20 li label': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'color': '#000',
    'paddingLeft': [{ 'unit': 'px', 'value': 30 }]
  },
  '#input_3_20 li label': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'color': '#000',
    'paddingLeft': [{ 'unit': 'px', 'value': 30 }]
  },
  '#input_2_27 li label': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'color': '#000',
    'paddingLeft': [{ 'unit': 'px', 'value': 30 }]
  },
  '#input_3_27 li label': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'color': '#000',
    'paddingLeft': [{ 'unit': 'px', 'value': 30 }]
  },
  '#input_2_25 label': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c4c4c4' }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }],
    'fontSize': [{ 'unit': 'px', 'value': 22 }, { 'unit': 'string', 'value': '!important' }],
    'fontFamily': ''rsuregular'',
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': 'px', 'value': 350 }],
    'color': '#000',
    'borderRadius': '5px',
    'textAlign': 'left'
  },
  '#input_3_25 label': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c4c4c4' }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }],
    'fontSize': [{ 'unit': 'px', 'value': 22 }, { 'unit': 'string', 'value': '!important' }],
    'fontFamily': ''rsuregular'',
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': 'px', 'value': 350 }],
    'color': '#000',
    'borderRadius': '5px',
    'textAlign': 'left'
  },
  '#input_2_25 input[type='radio']:checked + label': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'color': '#0e090c'
  },
  '#input_3_25 input[type='radio']:checked + label': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'color': '#ec068d'
  },
  '#input_2_25 label:before': {
    'display': 'none'
  },
  '#input_3_25 label:before': {
    'display': 'none'
  },
  '#input_2_25 label:after': {
    'display': 'none'
  },
  '#input_3_25 label:after': {
    'display': 'none'
  },
  'cal-modal': {
    'display': 'block',
    'position': 'fixed',
    'zIndex': '1',
    'paddingTop': [{ 'unit': 'px', 'value': 100 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'maxHeight': [{ 'unit': '%V', 'value': 1 }],
    'overflow': 'auto',
    'background': 'rgba(0, 0, 0, 0.7)',
    '<w767': {
      'padding': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
    }
  },
  'cal-modal > content': {
    'minHeight': [{ 'unit': 'px', 'value': 730 }],
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'maxWidth': [{ 'unit': 'px', 'value': 808 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }],
    'borderRadius': '5px',
    'backgroundColor': '#ffffff',
    'position': 'relative'
  },
  'cal-modal > content > close': {
    'color': '#aaaaaa',
    'float': 'right',
    'fontSize': [{ 'unit': 'px', 'value': 24 }]
  },
  'cal-modal > content > close:hover': {
    'color': '#000',
    'textDecoration': 'none',
    'cursor': 'pointer'
  },
  'cal-modal > content > close:focus': {
    'color': '#000',
    'textDecoration': 'none',
    'cursor': 'pointer'
  },
  'cal-modal > content > h2': {
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 32 }],
    'color': '#c6127c',
    'marginBottom': [{ 'unit': 'em', 'value': 0.4 }]
  },
  'cal-modal > content > divide': {
    'height': [{ 'unit': 'px', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': '#eaeaea'
  },
  'cal-modal > content > divideheader': {
    'height': [{ 'unit': 'px', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': '#c6127c'
  },
  'cal-modal > content > part': {
    'display': 'flex',
    'flexFlow': 'row wrap',
    'justifyContent': 'space-between',
    'margin': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }],
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'cal-modal > content > part > box': {
    'display': 'flex',
    'flexDirection': 'column',
    'flex': '1',
    'marginRight': [{ 'unit': 'px', 'value': 40 }]
  },
  'cal-modal > content > part > box:last-child': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'cal-modal > content > part > boxbig': {
    'display': 'flex',
    'flex': '2'
  },
  'cal-modal > content > part > boxone': {
    'maxWidth': [{ 'unit': '%H', 'value': 0.45 }]
  },
  'cal-modal > content > part > box > span': {
    'textAlign': 'right',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#8e8e8e',
    'marginTop': [{ 'unit': 'px', 'value': 2 }]
  },
  'cal-modal > content > part > box > inputWrapper': {
    'height': [{ 'unit': 'px', 'value': 46 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eaeaea' }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'textAlign': 'center'
  },
  'cal-modal > content > part > box > inputWrapper > input': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }],
    'textAlign': 'right',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': '%H', 'value': 0.7 }],
    'color': '#ec068d'
  },
  'cal-modal > content > part > boxbig > inputWrapper > input': {
    'width': [{ 'unit': '%H', 'value': 0.8 }]
  },
  'cal-modal > content > part > box > inputWrapper > input:focus': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'cal-footer': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': '#fef2f9',
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 122 }],
    'borderBottomLeftRadius': '5px',
    'borderBottomRightRadius': '5px',
    'display': 'flex',
    'flexFlow': 'row wrap'
  },
  'cal-left': {
    'flex': '1',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'flex-start',
    'marginLeft': [{ 'unit': 'px', 'value': 40 }]
  },
  ':root cal-left': {
    'float': 'left\0',
    'marginTop': [{ 'unit': 'px', 'value': 50 }]
  },
  'cal-right': {
    'flex': '1',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'flex-end',
    'marginRight': [{ 'unit': 'px', 'value': 40 }]
  },
  ':root cal-right': {
    'float': 'right\0',
    'marginTop': [{ 'unit': 'px', 'value': 50 }]
  },
  'cal-right > result': {
    'fontSize': [{ 'unit': 'px', 'value': 40 }],
    'color': '#ec068d',
    'margin': [{ 'unit': 'px', 'value': -8 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'cal-btn': {
    'fontFamily': ''rsuregular'',
    'color': '#000',
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'cal-icon': {
    'color': '#ec068d',
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'searchandfilter noUi-horizontal noUi-handle': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'top': [{ 'unit': 'px', 'value': -7 }],
    'background': '#ec058d',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'width': [{ 'unit': 'px', 'value': 15 }],
    'height': [{ 'unit': 'px', 'value': 15 }]
  },
  'searchandfilter noUi-horizontal noUi-handle:before': {
    'display': 'none'
  },
  'searchandfilter noUi-horizontal noUi-handle:after': {
    'display': 'none'
  },
  'sf-field-category': {
    'paddingTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'sf-field-category h4': {
    'paddingTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'widget-area widget': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e2e2e2' }]
  },
  'textwidget title': {
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'textwidget i': {
    'color': '#ec068d',
    'marginRight': [{ 'unit': 'px', 'value': 15 }]
  },
  'textwidget': {
    'paddingBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'no-height': {
    'height': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'minHeight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'section-introregister > overlay > container > title': {
    'color': '#ffffff'
  },
  'section-introregister > overlay > container > ul': {
    'flex': '3',
    'display': 'flex',
    'flexDirection': 'row',
    'flexWrap': 'wrap',
    // width: 70%;
    'justifyContent': 'space-between',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'fontFamily': ''rsuregular'',
    'color': '#ffffff'
  },
  'section-introregister > overlay > container > ul > li': {
    'margin': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 0 }],
    'display': 'flex',
    'flexDirection': 'column',
    'width': [{ 'unit': '%H', 'value': 0.25 }]
  },
  'section-introregister > overlay > container > ul > li > div': {
    'height': [{ 'unit': 'px', 'value': 43 }],
    'width': [{ 'unit': 'px', 'value': 56 }],
    'float': 'left',
    'backgroundSize': 'contain',
    'backgroundPositionX': 'center',
    'backgroundRepeat': 'no-repeat',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'section-introregister > overlay > container > ul > li icon_1': {
    'backgroundImage': 'url('../img/joinus_logo_1.png')'
  },
  'section-introregister > overlay > container > ul > li icon_2': {
    'backgroundImage': 'url('../img/joinus_logo_2.png')'
  },
  'section-introregister > overlay > container > ul > li icon_3': {
    'backgroundImage': 'url('../img/joinus_logo_3.png')'
  },
  'section-introregister > overlay > container > ul > li icon_4': {
    'backgroundImage': 'url('../img/joinus_logo_4.png')'
  },
  'card-content schedule': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e6e6e6' }],
    'borderRadius': '4px',
    'background': '#fafafa',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'card-content schedule-row': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eaeaea' }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'card-content schedule-row > a > divcols3 > span': {
    'color': '#222222'
  },
  'card-content schedule-row:last-child': {
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }]
  },
  'card-content schedule-row col': {
    'paddingTop': [{ 'unit': 'rem', 'value': 0.75 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.65 }]
  },
  'card-content schedule-row cols9': {
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eaeaea' }]
  },
  'card-credit': {
    'height': [{ 'unit': 'px', 'value': 398 }],
    'backgroundImage': 'url('../img/bg.jpg')',
    'backgroundSize': 'cover',
    'backgroundPosition': 'center',
    'backgroundRepeat': 'no-repeat'
  },
  '#input_2_4 #label_2_4_6': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }],
    'maxWidth': [{ 'unit': '%H', 'value': 0.9 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#input_3_4 #label_3_4_6': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }],
    'maxWidth': [{ 'unit': '%H', 'value': 0.9 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#input_3_4 ligchoice_3_4_6': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  '#input_2_4 ligchoice_2_4_6': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'chk-block > result': {
    'display': 'flex',
    'justifyContent': 'center',
    'flexDirection': 'column'
  },
  'chk-block > result > image': {
    'position': 'relative',
    'height': [{ 'unit': 'px', 'value': 230 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    '<w767': {
      'marginTop': [{ 'unit': 'px', 'value': 20 }]
    }
  },
  ':root chk-block > result > image': {
    'position': 'relative\0'
  },
  'chk-block > result > image > bg': {
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 0.4 }]
  },
  ':root chk-block > result > image > bg': {
    'left': [{ 'unit': '%H', 'value': 0.3 }]
  },
  'chk-block > result > image > arrow': {
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 0.2 }],
    'transform': 'rotate(-118deg)',
    'marginTop': [{ 'unit': '%V', 'value': 0.08 }]
  },
  ':root chk-block > result > image > arrow': {
    'left': [{ 'unit': '%H', 'value': 0.4 }]
  },
  'chk-block > result > image > arrowlevel-1': {
    'animation': 'spin-1 0.5s linear',
    'animationFillMode': 'forwards'
  },
  ':root chk-block > result > image > arrowlevel-1': {
    'transform': 'rotate(-83deg)\0'
  },
  'chk-block > result > image > arrowlevel-2': {
    'animation': 'spin-2 1s linear',
    'animationFillMode': 'forwards'
  },
  ':root chk-block > result > image > arrowlevel-2': {
    'transform': 'rotate(-40deg)\0'
  },
  'chk-block > result > image > arrowlevel-3': {
    'animation': 'spin-3 1.5s linear',
    'animationFillMode': 'forwards'
  },
  ':root chk-block > result > image > arrowlevel-3': {
    'transform': 'rotate(-0deg)\0'
  },
  'chk-block > result > image > arrowlevel-4': {
    'animation': 'spin-4 2s linear',
    'animationFillMode': 'forwards'
  },
  ':root chk-block > result > image > arrowlevel-4': {
    'transform': 'rotate(37deg)\0'
  },
  'chk-block > result > happy': {
    'display': 'flex',
    'flexFlow': 'row wrap',
    'justifyContent': 'center'
  },
  ':root chk-block > result > happy': {
    'position': 'relative\0',
    'minHeight': [{ 'unit': 'px', 'value': 100 }]
  },
  'chk-block > result > happy > happyImg': {
    'width': [{ 'unit': '%H', 'value': 0.15 }],
    'display': 'flex',
    'justifyContent': 'center'
  },
  ':root chk-block > result > happy > happyImg': {
    'position': 'absolute\0',
    'left': [{ 'unit': '%H', 'value': 0.15 }]
  },
  'chk-block > result > happy > happyImg > img': {
    'height': [{ 'unit': 'px', 'value': 100 }],
    'width': [{ 'unit': 'px', 'value': 100 }]
  },
  'chk-block > result > happy > happyTextWrapper': {
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'display': 'flex',
    'flexFlow': 'row wrap'
  },
  ':root chk-block > result > happy > happyTextWrapper': {
    'position': 'absolute\0',
    'right': [{ 'unit': '%H', 'value': 0.1 }]
  },
  'chk-block > result > happy > happyTextWrapper > happyArrowWrapper': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  ':root chk-block > result > happy > happyTextWrapper > happyArrowWrapper': {
    'display': 'none\0'
  },
  'chk-block > result > happy > happyTextWrapper > happyArrowWrapper > happyArrow': {
    'height': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c6127c' }],
    'borderLeft': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderTop': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderBottom': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }]
  },
  'chk-block > result > happy > happyTextWrapper > happyText': {
    'flex': '1',
    'height': [{ 'unit': 'px', 'value': 100 }],
    'background': '#c6127c',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'color': '#ffffff',
    'padding': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }],
    'borderRadius': '5px'
  },
  'chk-block validation_error': {
    'display': 'none'
  },
  'chk-block gfield_error': {
    'backgroundColor': 'initial !important',
    'borderTop': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }]
  },
  'gform_wrapper ligfield_error input:not([type='radio']):not([type='checkbox']):not([type='submit']):not([type='button']):not([type='image']):not([type='file'])': {
    'borderTop': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'borderLeft': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'borderRight': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }, { 'unit': 'string', 'value': '!important' }]
  },
  'gform_wrapper ligfield_error select': {
    'borderTop': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'borderLeft': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'borderRight': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }, { 'unit': 'string', 'value': '!important' }]
  },
  'gform_wrapper ligfield_error textarea': {
    'borderTop': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'borderLeft': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'borderRight': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }, { 'unit': 'string', 'value': '!important' }]
  },
  'gform_wrapper gfield_error gfield_label': {
    'color': '#222 !important'
  },
  'join_picture_1': {
    // margin: -50px 0 0 210px;
    'height': [{ 'unit': 'px', 'value': 325 }, { 'unit': 'string', 'value': '!important' }],
    'width': [{ 'unit': 'px', 'value': 540 }, { 'unit': 'string', 'value': '!important' }],
    'maxWidth': [{ 'unit': 'px', 'value': 540 }, { 'unit': 'string', 'value': '!important' }],
    'zIndex': '1 !important',
    'backgroundSize': '120%',
    'marginTop': [{ 'unit': 'px', 'value': 12 }]
  },
  'join_picture_2': {
    'height': [{ 'unit': 'px', 'value': 350 }, { 'unit': 'string', 'value': '!important' }],
    'width': [{ 'unit': 'px', 'value': 651 }, { 'unit': 'string', 'value': '!important' }],
    'maxWidth': [{ 'unit': 'px', 'value': 651 }, { 'unit': 'string', 'value': '!important' }],
    'zIndex': '1 !important',
    'backgroundSize': '110%'
  },
  'sidebar-interest': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c4c4c4' }],
    'borderRadius': '5px'
  },
  'sidebar-interest head h4': {
    'fontFamily': ''rsubold'',
    'color': '#fff',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'sidebar-interest head': {
    'textAlign': 'center',
    'background': '#c6127c',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'borderTopLeftRadius': '5px',
    'borderTopRightRadius': '5px'
  },
  'sidebar-interest content': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'fontFamily': ''rsuregular'',
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c4c4c4' }]
  },
  'sidebar-interest content number': {
    'fontSize': [{ 'unit': 'px', 'value': 22 }]
  },
  'sidebar-interest bottom': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'sidebar-interest bottom ul': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'sidebar-interest bottom i': {
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  '#field_2_21 > gfield_label': {
    'display': 'none'
  },
  '#field_2_28 > gfield_label': {
    'display': 'none'
  },
  '#field_3_28 > gfield_label': {
    'display': 'none'
  },
  '#site-mobile-navigation > menu-primary-menu-container > ul': {
    'marginTop': [{ 'unit': 'px', 'value': 80 }]
  },
  'home #site-desktop-navigation': {
    'animation': 'navigation-fade 2s ease-out',
    'opacity': '1'
  },
  'section-videobg ms-slide-layers > ms-anim-layers > divms-layer': {
    'animation': 'navigation-fade 2s ease-out'
  },
  'section-videobg ms-slide-layers > ms-anim-layers > divms-layer > h2': {
    'opacity': '0'
  },
  'section-videobg ms-slide-layers > ms-anim-layers > divms-layer > p': {
    'animation': 'navigation-fade 2s ease-out',
    // display: none;
  },
  'word-parallax': {
    'background': 'rgba(0, 0, 0, 0.5)',
    '<w766': {
      'height': [{ 'unit': 'px', 'value': 150 }]
    },
    '>w767&&<w991': {
      'height': [{ 'unit': 'px', 'value': 200 }]
    }
  },
  'word-parallax > parallax': {
    'backgroundSize': '140%',
    '<w991': {
      'backgroundAttachment': 'fixed',
      'backgroundSize': 'auto'
    }
  },
  'word-parallax header': {
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 48 }]
  },
  ':root word-parallax header': {
    'marginTop': [{ 'unit': 'px', 'value': 200 }]
  },
  'word-parallax sub-header': {
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 36 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'producttype-product': {
    'opacity': '0'
  },
  ':root producttype-product': {
    'opacity': '1\0'
  },
  'producttype-productslide': {
    'animation': 'product-slide 0.5s ease-in',
    'animationFillMode': 'forwards'
  },
  // .post.type-post {
	opacity: 0;
}
.post.type-post.slide {
	animation: product-slide .5s ease-in;
	animation-fill-mode: forwards;
}
  '#video-menu li': {
    'display': 'inline-block',
    'padding': [{ 'unit': 'rem', 'value': 0.7 }, { 'unit': 'rem', 'value': 1.5 }, { 'unit': 'rem', 'value': 0.7 }, { 'unit': 'rem', 'value': 1.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.4 }]
  },
  '#video-menu': {
    'textAlign': 'center',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eaeaea' }]
  },
  '#video-menu li a': {
    'color': '#222'
  },
  '#video-menu current-menu-item': {
    'background': 'transparent',
    'borderBottom': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'marginBottom': [{ 'unit': 'px', 'value': -2 }]
  },
  'gform_wrapper field_description_below gfield_description': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'fontFamily': ''rsuregular'',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'section-com-m img': {
    'maxWidth': [{ 'unit': 'px', 'value': 200 }]
  },
  'section-com-m owl-item div': {
    'paddingBottom': [{ 'unit': 'px', 'value': 100 }]
  },
  'section-com-m owl-prev': {
    'top': [{ 'unit': '%V', 'value': 0.3 }]
  },
  'section-com-m owl-next': {
    'top': [{ 'unit': '%V', 'value': 0.3 }]
  },
  'section-com-m tooltiptext': {
    'visibility': 'visible',
    'opacity': '1'
  },
  'policy-link': {
    'color': '#ffffff'
  },
  'policy-link:hover': {
    'color': '#b0b0b0'
  },
  'btn-pre-event': {
    'fontFamily': ''rsuregular'',
    'color': '#222',
    'fontSize': [{ 'unit': 'rem', 'value': 1.6 }],
    'display': 'block',
    'marginTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'btn-pre-event i': {
    'color': '#ec068d',
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'page-template-page-our-success entry-content': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'page-template-page-our-success site-content': {
    'background': '#fafafa'
  },
  'member-info': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'member-info member-name': {
    'fontFamily': ''rsubold'',
    'color': '#222',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'marginBottom': [{ 'unit': 'px', 'value': 5 }],
    'only screen&&<w991': {
      'fontSize': [{ 'unit': 'px', 'value': 20 }]
    }
  },
  'member-info member-com': {
    'fontFamily': ''rsuregular'',
    'color': '#222',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'member-info member-desc': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#222',
    // min-height: 83px;
  },
  'member member-photo img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'member': {
    'borderRadius': '3px',
    'background': '#fff',
    'marginBottom': [{ 'unit': 'px', 'value': 30 }],
    'minHeight': [{ 'unit': 'px', 'value': 394 }]
  },
  'um-field-comname um-field-area': {
    'fontFamily': ''THSarabunNew''
  },
  'um-name': {
    'fontFamily': ''rsubold'',
    'fontWeight': 'normal !important'
  },
  'um-field-value': {
    'color': '#222'
  },
  'page-template-page-our-success main-title': {
    'backgroundColor': '#fafafa'
  },
  'section-com circle': {
    // padding: 2px;
    // border: 1px solid #38373c;
  },
  'circleWrapper': {
    'display': 'grid',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'black' }],
    'borderRadius': '50%',
    'transition': '0.2s'
  },
  ':root circleWrapper': {
    'display': 'block\0',
    'border': [{ 'unit': 'string', 'value': 'none\0' }]
  },
  'circleWrapper > img': {
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }],
    'transition': '0.2s'
  },
  ':root circleWrapper > img': {
    'position': 'relative\0',
    'top': [{ 'unit': 'px', 'value': 6 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'circleWrapper:hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }]
  },
  'circleWrapper > img:hover': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'section-precheckup': {
    'paddingTop': [{ 'unit': 'px', 'value': 150 }]
  },
  'page-template-page-precheckup site-canvas': {
    'background': '#38373c'
  },
  'page-template-page-precheckup site-header': {
    'background': 'transparent'
  },
  'section-precheckup subtitle': {
    'color': '#fff',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 32 }],
    'marginBottom': [{ 'unit': 'px', 'value': 80 }]
  },
  'section-precheckup line': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'width': [{ 'unit': 'px', 'value': 80 }],
    'marginBottom': [{ 'unit': 'px', 'value': 50 }],
    'marginTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'section-precheckup btn': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#4b002ca3' }],
    'width': [{ 'unit': 'px', 'value': 300 }],
    'height': [{ 'unit': 'px', 'value': 60 }],
    'lineHeight': [{ 'unit': 'px', 'value': 60 }],
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'borderRadius': '5px'
  },
  'section-videobg btn': {
    'borderBottom': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dbdbdb' }],
    'borderLeft': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dbdbdb' }],
    'height': [{ 'unit': 'px', 'value': 60 }],
    'lineHeight': [{ 'unit': 'px', 'value': 60 }],
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'borderRadius': '10px'
  },
  'section-register line': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec068d' }],
    'width': [{ 'unit': 'px', 'value': 80 }],
    'marginBottom': [{ 'unit': 'px', 'value': 40 }]
  },
  'section-register blockcontent li div': {
    'height': [{ 'unit': 'px', 'value': 25 }],
    'width': [{ 'unit': 'px', 'value': 32 }],
    'float': 'left',
    'backgroundSize': 'contain',
    'backgroundPositionX': 'center',
    'backgroundRepeat': 'no-repeat',
    'marginRight': [{ 'unit': 'px', 'value': 16 }]
  },
  'page-template-page-register site-content': {
    'background': '#000'
  },
  'section-register title': {
    'color': '#fff',
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 48 }],
    'marginBottom': [{ 'unit': 'px', 'value': 50 }],
    '>w767&&<w991': {
      'fontSize': [{ 'unit': 'px', 'value': 36 }],
      'marginBottom': [{ 'unit': 'px', 'value': 20 }]
    }
  },
  'section-register blockcontent': {
    'paddingTop': [{ 'unit': 'px', 'value': 25 }]
  },
  'section-register blockcontent li': {
    'fontFamily': ''rsuregular'',
    'color': '#fff',
    'marginBottom': [{ 'unit': 'px', 'value': 50 }],
    'fontSize': [{ 'unit': 'px', 'value': 24 }]
  },
  'section-register icon_1': {
    'backgroundImage': 'url(../img/joinus_logo_1.png)'
  },
  'section-register icon_2': {
    'backgroundImage': 'url(../img/joinus_logo_2.png)'
  },
  'section-register icon_3': {
    'backgroundImage': 'url(../img/joinus_logo_3.png)'
  },
  'section-register icon_4': {
    'backgroundImage': 'url(../img/joinus_logo_4.png)'
  },
  'fullscreen-bg': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'zIndex': '-100'
  },
  'fullscreen-bg__video': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'section-register blockcontent': {
    'position': 'relative'
  },
  'category-event point': {
    'color': '#ec068d',
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'category-event cd-title': {
    'fontFamily': ''Roboto'',
    'fontWeight': 'bold',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'display': 'inline'
  },
  'strong': {
    'fontWeight': 'bold'
  },
  'entry-content ul:not(browser-default) > li': {
    // list-style-type: disc;
  },
  'entry-content ul:not(browser-default)': {
    'paddingLeft': [{ 'unit': 'em', 'value': 1.6 }]
  },
  'single-product entry-content ul': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'single-product entry-content ul:not(browser-default) > li': {
    'listStyleType': 'none'
  },
  'page-template-page-register card-register card-content': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'um-118um': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'card-register um-field': {
    'paddingTop': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 24 }],
    'paddingRight': [{ 'unit': 'px', 'value': 24 }]
  },
  'card-register um-fieldum-field-um_block_118_9': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'card-register um-fieldum-field-um_block_118_9_10': {
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'card-register #next': {
    'display': 'block',
    'textAlign': 'center',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': '#ec068d',
    'borderBottomLeftRadius': '10px',
    'borderBottomRightRadius': '10px',
    'fontFamily': ''rsuregular'',
    'color': '#fff',
    'paddingTop': [{ 'unit': 'px', 'value': 20 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 15 }],
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'marginTop': [{ 'unit': 'px', 'value': 30 }],
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }, { 'unit': 'string', 'value': '!important' }],
    'cursor': 'pointer',
    'transition': '0.4s'
  },
  'card-register #nextdisabled': {
    'background': '#eaeaea !important',
    'cursor': 'not-allowed',
    'transition': '0.4s',
    'pointerEvents': 'none'
  },
  'card-register #nextdisabled:hover': {
    'background': '#eaeaea !important',
    'cursor': 'not-allowed',
    'transition': '0.4s',
    'pointerEvents': 'none'
  },
  'card-register #back': {
    'color': '#ec068d',
    'cursor': 'pointer'
  },
  'card-register #back i': {
    'fontSize': [{ 'unit': 'px', 'value': 24 }]
  },
  'card-register um-right': {
    'display': 'none'
  },
  'card-register um-half': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'modal': {
    'maxWidth': [{ 'unit': 'px', 'value': 900 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'maxHeight': [{ 'unit': '%V', 'value': 0.9 }]
  },
  'modal member-name': {
    'fontFamily': ''rsubold'',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'modal member-company': {
    'fontFamily': ''rsuregular'',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'modal member-web': {
    'fontFamily': ''rsuregular'',
    'color': '#ec068d'
  },
  'modal heading': {
    'color': '#ec068d'
  },
  'modal additional': {
    'fontFamily': ''rsuregular''
  },
  'modal content h1': {
    'color': '#ec068d',
    'marginBottom': [{ 'unit': 'px', 'value': 5 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': 'bold'
  },
  'modal content h2': {
    'color': '#ec068d',
    'marginBottom': [{ 'unit': 'px', 'value': 5 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': 'bold'
  },
  'modal content h3': {
    'color': '#ec068d',
    'marginBottom': [{ 'unit': 'px', 'value': 5 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': 'bold'
  },
  'modal content h4': {
    'color': '#ec068d',
    'marginBottom': [{ 'unit': 'px', 'value': 5 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': 'bold'
  },
  'modal content h5': {
    'color': '#ec068d',
    'marginBottom': [{ 'unit': 'px', 'value': 5 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': 'bold'
  },
  'modal content h6': {
    'color': '#ec068d',
    'marginBottom': [{ 'unit': 'px', 'value': 5 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': 'bold'
  },
  'modal content': {
    'height': [{ 'unit': 'px', 'value': 300 }],
    'overflowY': 'scroll',
    'marginTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'modal content p': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'fontFamily': ''THSarabunNew'',
    'marginBottom': [{ 'unit': 'px', 'value': 5 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'modal row': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'modal content::-webkit-scrollbar-track': {
    'backgroundColor': '#f4f4f4'
  },
  'modal content::-webkit-scrollbar': {
    'width': [{ 'unit': 'px', 'value': 10 }],
    'backgroundColor': '#f4f4f4'
  },
  'modal content::-webkit-scrollbar-thumb': {
    'backgroundColor': '#cb1580'
  },
  'modal aclose-modal': {
    'top': [{ 'unit': 'px', 'value': 15 }],
    'right': [{ 'unit': 'px', 'value': 15 }]
  },
  'blocker': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '99999'
  },
  'home modal aclose-modal': {
    'display': 'none'
  },
  'modal aclose-modalbtn-close': {
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 300 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'textIndent': '0',
    'textAlign': 'center',
    'background': '#ec068d',
    'color': '#fff',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'rem', 'value': 1.6 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'position': 'relative',
    'borderRadius': '6px'
  },
  'box-btn': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'fixed',
    'bottom': [{ 'unit': '%V', 'value': 0.05 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'password-hint': {
    'fontFamily': ''rsuregular' !important',
    'fontSize': [{ 'unit': 'px', 'value': 14 }, { 'unit': 'string', 'value': '!important' }],
    'color': '#222222',
    'opacity': '0.5',
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }, { 'unit': 'string', 'value': '!important' }],
    'marginTop': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'string', 'value': '!important' }]
  },
  'entry-content validation_error': {
    'display': 'none'
  },
  'gform_wrapper ligfieldgfield_error': {
    'background': 'transparent !important',
    'borderTop': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }]
  },
  'gform_wrapper ligfieldgfield_errorgfield_contains_requiredgfield_creditcard_warning': {
    'background': 'transparent !important',
    'borderTop': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }]
  },
  'gfield_descriptionvalidation_message': {
    'fontFamily': ''rsuregular' !important',
    'fontSize': [{ 'unit': 'px', 'value': 18 }, { 'unit': 'string', 'value': '!important' }],
    'fontWeight': '200 !important',
    'color': '#f54b5e !important',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'um-account-icontip > um-account-text': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'um-account-tab > p': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'right-alignnote': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'table-left-side': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c4c4c4' }],
    'borderBottomLeftRadius': '5px',
    'borderBottomRightRadius': '5px'
  },
  'table-left-side > caption': {
    'height': [{ 'unit': 'px', 'value': 45 }],
    'background': '#c6127c',
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#ffffff',
    'lineHeight': [{ 'unit': 'px', 'value': 2.4 }],
    'borderTopLeftRadius': '5px',
    'borderTopRightRadius': '5px'
  },
  'table-left-side > thead': {
    'background': '#eaeaea',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }]
  },
  'table-left-side > thead > tr > th': {
    'fontWeight': 'normal',
    'textAlign': 'center'
  },
  'table-left-side > tbody > tr > td': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c4c4c4' }]
  },
  'table-left-side > thead > tr > th:first-child': {
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c4c4c4' }]
  },
  'table-left-side > tbody > tr > td:first-child': {
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c4c4c4' }]
  },
  'colm3s12 since': {
    'marginTop': [{ 'unit': 'px', 'value': 7 }],
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#222222',
    'opacity': '0.7'
  },
  'entry-contentcolm8-full-width > site-main-hide-title > collapsible': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'entry-contentcolm8-full-width > site-main-hide-title > collapsible > li > collapsible-header': {
    'background': '#fafafa'
  },
  'entry-contentcolm8-full-width > site-main-hide-title > collapsible > li > collapsible-body': {
    'background': '#fafafa'
  },
  'seed-socialside-social': {
    'display': 'flex',
    'flexDirection': 'column',
    'position': 'absolute',
    'transition': '0.01s',
    '<w767': {
      'display': 'none'
    }
  },
  ':root seed-socialside-social': {
    'display': 'none\0'
  },
  'seed-socialside-social > div > a': {
    'height': [{ 'unit': 'px', 'value': 56 }],
    'minHeight': [{ 'unit': 'px', 'value': 56 }],
    'maxHeight': [{ 'unit': 'px', 'value': 56 }],
    'minWidth': [{ 'unit': 'px', 'value': 56 }],
    'maxWidth': [{ 'unit': 'px', 'value': 56 }],
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'borderRadius': '50%',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'seed-socialside-social > div > a > i': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  '#primary-menu > menu-item > ulsub-menu': {
    'width': [{ 'unit': 'px', 'value': 180 }, { 'unit': 'string', 'value': '!important' }]
  },
  'section-account profile-title': {
    'fontFamily': ''rsubold'',
    'marginBottom': [{ 'unit': 'px', 'value': 5 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'display': 'inline-block',
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'section-account profile-desc': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.4 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'section-account profile-img': {
    'borderRadius': '50%',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#222' }],
    'padding': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }]
  },
  'section-account profile-edit': {
    'color': 'rgba(0, 0, 0, 0.7)',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'textDecoration': 'underline'
  },
  'card my-product': {
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 28 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'card my-product span': {
    'color': '#ec068d',
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  'card my-product-desc': {
    'color': '#222',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  's5ths': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'left': [{ 'unit': 'string', 'value': 'auto' }],
    'right': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'm5ths': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'left': [{ 'unit': 'string', 'value': 'auto' }],
    'right': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'l5ths': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'left': [{ 'unit': 'string', 'value': 'auto' }],
    'right': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'xl5ths': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'left': [{ 'unit': 'string', 'value': 'auto' }],
    'right': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'row cols5ths': {
    'width': [{ 'unit': '%H', 'value': 0.2 }]
  },
  'card profile-product-box': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#38373c' }],
    'borderRadius': '4px',
    'marginBottom': [{ 'unit': 'px', 'value': 30 }],
    'position': 'relative'
  },
  'card profile-product-box span': {
    'fontSize': [{ 'unit': 'px', 'value': 36 }]
  },
  'post-type-archive-show_your_product masonry': {
    'margin': [{ 'unit': 'em', 'value': 1.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1.5 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'MozColumnGap': '1.5em',
    'WebkitColumnGap': '1.5em',
    'columnGap': [{ 'unit': 'em', 'value': 1.5 }],
    'fontSize': [{ 'unit': 'em', 'value': 0.85 }]
  },
  ':root post-type-archive-show_your_product masonry': {
    'verticalAlign': 'top\0',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'post-type-archive-show_your_product item': {
    'display': 'inline-block',
    'background': '#fff',
    // padding: 1.5em;
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1.5 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'boxSizing': 'border-box',
    'MozBoxSizing': 'border-box',
    'WebkitBoxSizing': 'border-box',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.18)' }],
    'borderRadius': '3px',
    'MozBorderRadius': '3px',
    'WebkitBorderRadius': '3px',
    'overflow': 'hidden'
  },
  ':root post-type-archive-show_your_product item': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1.5 }, { 'unit': 'em', 'value': 1.5 }, { 'unit': 'em', 'value': 1.5 }],
    'width': [{ 'unit': '%H', 'value': 0.2 }],
    'verticalAlign': 'top\0'
  },
  'post-type-archive-show_your_product item title': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.7 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.7 }],
    'fontFamily': ''rsubold'',
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'post-type-archive-show_your_product item img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'post-type-archive-show_your_product item company-name': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.9 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.9 }],
    'fontFamily': ''rsuregular'',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'textAlign': 'left'
  },
  'post-type-archive-show_your_product masonry': {
    // Masonry container
    'columnCount': '4',
    'columnGap': [{ 'unit': 'em', 'value': 1 }]
  },
  'post-type-archive-show_your_product item': {
    // Masonry bricks or child elements
    'backgroundColor': '#eee',
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'post-type-archive-show_your_product modal': {
    'maxWidth': [{ 'unit': 'px', 'value': 700 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }]
  },
  'post-type-archive-show_your_product modal img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'post-type-archive-show_your_product modal info': {
    'fontFamily': ''rsuregular''
  },
  'post-type-archive-show_your_product modal contact': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'post-type-archive-show_your_product modal info p': {
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'post-type-archive-show_your_product modal contact span': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#ec068d',
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  'post-type-archive-show_your_product hr': {
    'margin': [{ 'unit': 'em', 'value': 0.7 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.7 }, { 'unit': 'px', 'value': 0 }]
  },
  'post-type-archive-show_your_product modal icon': {
    'maxWidth': [{ 'unit': 'px', 'value': 24 }]
  },
  'post-type-archive-show_your_product brand-top': {
    'backgroundColor': '#f4f4f4',
    'marginBottom': [{ 'unit': 'px', 'value': 15 }],
    'paddingTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'post-type-archive-show_your_product brand-title': {
    'color': '#222222',
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'post-type-archive-show_your_product brand-desc': {
    'color': '#222',
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'marginBottom': [{ 'unit': 'em', 'value': 0.7 }]
  },
  'post-type-archive-show_your_product logo': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#222' }],
    'borderRadius': '50%',
    'padding': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }],
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'chip': {
    'borderRadius': '10px'
  },
  'chipgrooming': {
    'color': '#fff',
    'fontFamily': ''rsuregular'',
    'backgroundColor': '#00a68e',
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'chiptraining': {
    'color': '#fff',
    'fontFamily': ''rsuregular'',
    'backgroundColor': '#5502af',
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'act-taggrooming': {
    'backgroundColor': '#00a68e'
  },
  'act-tagtraining': {
    'backgroundColor': '#5502af'
  },
  ':root ms-nav-next': {
    'display': 'none\0'
  },
  'ms-nav-prev': {
    'display': 'none\0'
  },
  'syp-head': {
    'height': [{ 'unit': 'px', 'value': 780 }],
    'position': 'relative',
    'background': 'url('../img/showproduct_bg.jpg') #38373c',
    'backgroundPositionX': 'right',
    'backgroundPositionY': 'bottom',
    'backgroundRepeat': 'no-repeat',
    'overflow': 'hidden',
    'zIndex': '-0',
    '<w768': {
      'height': [{ 'unit': 'vh', 'value': 100 }]
    }
  },
  'syp-head > arrow-left': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 94 }],
    'left': [{ 'unit': 'vw', 'value': 41 }],
    'zIndex': '-1'
  },
  'syp-head > arrow-line-left': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': NaN }],
    'left': [{ 'unit': 'vw', 'value': 39 }],
    'zIndex': '-1',
    'animation': 'fade-left 2s infinite',
    'overflow': 'hidden'
  },
  'syp-head > arrow-right': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 211 }],
    'right': [{ 'unit': 'vw', 'value': -1 }],
    'transform': 'rotate(180deg)',
    'zIndex': '-1'
  },
  'syp-head > arrow-line-right': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': NaN }],
    'right': [{ 'unit': 'vw', 'value': -2.5 }],
    'transform': 'rotate(180deg)',
    'zIndex': '-1',
    'animation': 'fade-right 2s infinite',
    'overflow': 'hidden'
  },
  'syp-head > syp-pink-bg': {
    'position': 'absolute',
    'background': '#de0a87',
    'height': [{ 'unit': 'vw', 'value': 100 }],
    'width': [{ 'unit': 'vw', 'value': 65 }],
    'transform': 'translateX(-10vw) translateY(-10vw) rotate(-23deg)'
  },
  'syp-head > container': {
    'transform': 'translateX(0)'
  },
  'syp-head > container > line': {
    'height': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': 'px', 'value': 80 }],
    'background': '#ffffff',
    'marginTop': [{ 'unit': 'px', 'value': 126 }]
  },
  'syp-head > container > h1': {
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 56 }],
    'color': '#ffffff',
    'margin': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }]
  },
  'syp-head > container > h2': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'color': '#ffffff'
  },
  'syp-head > container > rocket': {
    'marginTop': [{ 'unit': 'px', 'value': 56 }]
  },
  'syp-head > swiper-container': {
    'height': [{ 'unit': 'px', 'value': 350 }],
    'width': [{ 'unit': 'vw', 'value': 60 }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': -40 }],
    'bottom': [{ 'unit': 'px', 'value': 158 }]
  },
  ':root syp-head > swiper-container': {
    'right': [{ 'unit': 'px', 'value': -300 }]
  },
  ':root syp-head > swiper-container > swiper-wrapper': {
    'display': 'block\0'
  },
  'syp-head > swiper-container > swiper-wrapper > swiper-slide': {
    'height': [{ 'unit': 'px', 'value': 345 }],
    'display': 'flex',
    'flexDirection': 'column',
    'background': '#ffffff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#8e8e8e' }],
    'borderRadius': '4px',
    'boxShadow': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(100, 100, 100, 0.3)' }]
  },
  ':root syp-head > swiper-container > swiper-wrapper > swiper-slide': {
    'width': [{ 'unit': '%H', 'value': 0.2 }],
    'display': 'inline\0',
    'float': 'left\0',
    'marginRight': [{ 'unit': 'px', 'value': 30 }]
  },
  'syp-head > swiper-container > swiper-wrapper > swiper-slide > img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'syp-head > swiper-container > swiper-wrapper > swiper-slide > desc': {
    'flex': '1',
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'paddingLeft': [{ 'unit': 'px', 'value': 16 }]
  },
  'syp-head > swiper-container > swiper-wrapper > swiper-slide > desc > name': {
    'fontFamily': ''rsubold'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'syp-head > swiper-container > swiper-wrapper > swiper-slide > desc > brand': {
    'fontFamily': ''rsuregular'',
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'syp-head > swiper-control': {
    'position': 'absolute',
    'right': [{ 'unit': 'vw', 'value': NaN }],
    'bottom': [{ 'unit': 'px', 'value': 100 }],
    'width': [{ 'unit': 'px', 'value': 96 }],
    'display': 'flex',
    'flexDirection': 'row'
  },
  ':root syp-head > swiper-control': {
    'display': 'none\0'
  },
  'syp-head > swiper-control > lineWrapper': {
    'flex': '1',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'syp-head > swiper-control > lineWrapper > vertical-line': {
    'height': [{ 'unit': 'px', 'value': 24 }],
    'width': [{ 'unit': 'px', 'value': 1 }],
    'background': 'rgba(255, 255, 255, 0.5)'
  },
  'syp-head > swiper-control > button-prev': {
    'flex': '1',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'color': '#ffffff',
    'cursor': 'pointer'
  },
  'button-next': {
    'flex': '1',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'color': '#ffffff',
    'cursor': 'pointer'
  },
  'gf_left_halfcredit': {
    'display': 'block !important'
  },
  'page-template-page-credit inputselect-dropdown': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#EAEAEA!important' }],
    'background': 'rgba(236, 6, 141, 0.00)!important'
  },
  'post-type-archive-show_your_product searchandfilter': {
    'marginTop': [{ 'unit': 'px', 'value': 50 }]
  },
  'pum-noticeerr': {
    'display': 'none'
  },
  'profile-product-box spandraft': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'background': '#F8C51C',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'borderTopRightRadius': '3px',
    'borderTopLeftRadius': '3px',
    'fontFamily': '"rsuregular"',
    'paddingTop': [{ 'unit': 'px', 'value': 5 }]
  }
});
