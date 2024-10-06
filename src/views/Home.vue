<script setup lang="ts">
import { ref, onMounted } from "vue"
import { searchPhotos } from '@/infrastructures/api';
import PhotoCard from '@/components/PhotoCard.vue'
import LoadingCard from '@/components/LoadingCard.vue'
import Modal from '@/components/Modal.vue'

import type { Photo, PhotoData, SearchQueryParams } from '@/types'

const photos = ref<any[]>([
  {
    "id": "xdS9XEoKBLY",
    "slug": "man-in-red-blue-and-white-plaid-dress-shirt-wearing-yellow-hat-holding-black-smartphone-xdS9XEoKBLY",
    "alternative_slugs": {
      "en": "man-in-red-blue-and-white-plaid-dress-shirt-wearing-yellow-hat-holding-black-smartphone-xdS9XEoKBLY",
      "es": "hombre-con-camisa-de-vestir-a-cuadros-roja-azul-y-blanca-con-sombrero-amarillo-sosteniendo-un-telefono-inteligente-negro-xdS9XEoKBLY",
      "ja": "赤い帽子をかぶった赤青と白の格子縞のドレスシャツを着た男性が黒いスマートフォンを持つ-xdS9XEoKBLY",
      "fr": "man-in-red-blue-and-white-plaid-dress-shirt-wearing-yellow-hat-holding-black-smartphone-xdS9XEoKBLY",
      "it": "uomo-in-rosso-blu-e-bianco-camicia-a-quadri-che-indossa-cappello-giallo-tenendo-smartphone-nero-xdS9XEoKBLY",
      "ko": "빨간색-파란색과-흰색-격자-무늬-드레스-셔츠를-입은-남자는-검은-스마트-폰을-들고-노란색-모자를-쓰고-xdS9XEoKBLY",
      "de": "mann-in-rot-blau-weiss-kariertem-hemd-mit-gelbem-hut-mit-schwarzem-smartphone-xdS9XEoKBLY",
      "pt": "homem-em-vermelho-azul-e-branco-xadrez-camisa-social-vestindo-chapeu-amarelo-segurando-smartphone-preto-xdS9XEoKBLY"
    },
    "created_at": "2021-05-25T01:19:49Z",
    "updated_at": "2024-10-05T06:53:10Z",
    "promoted_at": null,
    "width": 2670,
    "height": 4000,
    "color": "#404040",
    "blur_hash": "L7BM=0Vs0jx^IS-;9HDjt+bt?aof",
    "description": "Portrait of a black man architect at a building site looking at camera. Confident civil engineering wearing a hardhat and eye goggles. Successful mature civil engineer at a construction site with open",
    "alt_description": "man in red blue and white plaid dress shirt wearing yellow hat holding black smartphone",
    "breadcrumbs": [],
    "urls": {
      "raw": "https://images.unsplash.com/photo-1621905253185-95614217f357?ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHwxfHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3",
      "full": "https://images.unsplash.com/photo-1621905253185-95614217f357?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHwxfHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3\u0026q=85",
      "regular": "https://images.unsplash.com/photo-1621905253185-95614217f357?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHwxfHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
      "small": "https://images.unsplash.com/photo-1621905253185-95614217f357?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHwxfHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
      "thumb": "https://images.unsplash.com/photo-1621905253185-95614217f357?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHwxfHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
    },
    "links": {
      "self": "https://api.unsplash.com/photos/man-in-red-blue-and-white-plaid-dress-shirt-wearing-yellow-hat-holding-black-smartphone-xdS9XEoKBLY",
      "html": "https://unsplash.com/photos/man-in-red-blue-and-white-plaid-dress-shirt-wearing-yellow-hat-holding-black-smartphone-xdS9XEoKBLY",
      "download": "https://unsplash.com/photos/xdS9XEoKBLY/download?ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHwxfHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww",
      "download_location": "https://api.unsplash.com/photos/xdS9XEoKBLY/download?ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHwxfHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww"
    },
    "likes": 137,
    "liked_by_user": false,
    "current_user_collections": [],
    "sponsorship": null,
    "topic_submissions": {
      "business-work": {
        "status": "approved",
        "approved_on": "2021-07-05T12:23:13Z"
      }
    },
    "asset_type": "photo",
    "user": {
      "id": "cr-83_v5ALc",
      "updated_at": "2024-08-29T23:13:44Z",
      "username": "emmages",
      "name": "Emmanuel Ikwuegbu",
      "first_name": "Emmanuel",
      "last_name": "Ikwuegbu",
      "twitter_username": "_Emmages",
      "portfolio_url": "http://Linktr.ee/Emmages",
      "bio": "Creates timeless and contemporary pictures taking on a minimalistic approach.\r\nAvailable for paid assignments and gigs.  Mail: emmageinc@gmail.com",
      "location": "Nigeria",
      "links": {
        "self": "https://api.unsplash.com/users/emmages",
        "html": "https://unsplash.com/@emmages",
        "photos": "https://api.unsplash.com/users/emmages/photos",
        "likes": "https://api.unsplash.com/users/emmages/likes",
        "portfolio": "https://api.unsplash.com/users/emmages/portfolio",
      },
      "profile_image": {
        "small": "https://images.unsplash.com/profile-1621904400728-641cc52ced15image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
        "medium": "https://images.unsplash.com/profile-1621904400728-641cc52ced15image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
        "large": "https://images.unsplash.com/profile-1621904400728-641cc52ced15image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128"
      },
      "instagram_username": "iamemmages",
      "total_collections": 1,
      "total_likes": 3,
      "total_photos": 147,
      "total_promoted_photos": 13,
      "total_illustrations": 0,
      "total_promoted_illustrations": 0,
      "accepted_tos": true,
      "for_hire": true,
      "social": {
        "instagram_username": "iamemmages",
        "portfolio_url": "http://Linktr.ee/Emmages",
        "twitter_username": "_Emmages",
        "paypal_email": null
      }
    }
  },
  {
    "id": "yrzBgqapG1I",
    "slug": "woman-carrying-baby-on-back-yrzBgqapG1I",
    "alternative_slugs": {
      "en": "woman-carrying-baby-on-back-yrzBgqapG1I",
      "es": "woman-carrying-baby-on-back-yrzBgqapG1I",
      "ja": "woman-carrying-baby-on-back-yrzBgqapG1I",
      "fr": "woman-carrying-baby-on-back-yrzBgqapG1I",
      "it": "donna-che-porta-il-bambino-sulla-schiena-yrzBgqapG1I",
      "ko": "woman-carrying-baby-on-back-yrzBgqapG1I",
      "de": "woman-carrying-baby-on-back-yrzBgqapG1I",
      "pt": "woman-carrying-baby-on-back-yrzBgqapG1I"
    },
    "created_at": "2017-02-19T23:19:52Z",
    "updated_at": "2024-10-02T18:09:42Z",
    "promoted_at": "2017-02-19T23:19:52Z",
    "width": 6000,
    "height": 4000,
    "color": "#262626",
    "blur_hash": "L8B|TlXm0vHs9D9Ftm-WNMRlt8-:",
    "description": "Mother and baby cassava farming",
    "alt_description": "woman carrying baby on back",
    "breadcrumbs": [],
    "urls": {
      "raw": "https://images.unsplash.com/photo-1487546331507-fcf8a5d27ab3?ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHwyfHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3",
      "full": "https://images.unsplash.com/photo-1487546331507-fcf8a5d27ab3?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHwyfHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3\u0026q=85",
      "regular": "https://images.unsplash.com/photo-1487546331507-fcf8a5d27ab3?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHwyfHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
      "small": "https://images.unsplash.com/photo-1487546331507-fcf8a5d27ab3?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHwyfHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
      "thumb": "https://images.unsplash.com/photo-1487546331507-fcf8a5d27ab3?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHwyfHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
    },
    "links": {
      "self": "https://api.unsplash.com/photos/woman-carrying-baby-on-back-yrzBgqapG1I",
      "html": "https://unsplash.com/photos/woman-carrying-baby-on-back-yrzBgqapG1I",
      "download": "https://unsplash.com/photos/yrzBgqapG1I/download?ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHwyfHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww",
      "download_location": "https://api.unsplash.com/photos/yrzBgqapG1I/download?ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHwyfHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww"
    },
    "likes": 1500,
    "liked_by_user": false,
    "current_user_collections": [],
    "sponsorship": null,
    "topic_submissions": {
      "people": {
        "status": "approved",
        "approved_on": "2020-04-06T14:20:24Z"
      }
    },
    "asset_type": "photo",
    "user": {
      "id": "IFcEhJqem0Q",
      "updated_at": "2024-10-05T08:06:07Z",
      "username": "anniespratt",
      "name": "Annie Spratt",
      "first_name": "Annie",
      "last_name": "Spratt",
      "twitter_username": "anniespratt",
      "portfolio_url": "https://www.anniespratt.com",
      "bio": "Hobbyist photographer from England, sharing my digital, film + vintage slide scans. Shooting a roll of film every day in 2024.",
      "location": "New Forest National Park, UK",
      "links": {
        "self": "https://api.unsplash.com/users/anniespratt",
        "html": "https://unsplash.com/@anniespratt",
        "photos": "https://api.unsplash.com/users/anniespratt/photos",
        "likes": "https://api.unsplash.com/users/anniespratt/likes",
        "portfolio": "https://api.unsplash.com/users/anniespratt/portfolio",
      },
      "profile_image": {
        "small": "https://images.unsplash.com/profile-1648828806223-1852f704c58aimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
        "medium": "https://images.unsplash.com/profile-1648828806223-1852f704c58aimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
        "large": "https://images.unsplash.com/profile-1648828806223-1852f704c58aimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128"
      },
      "instagram_username": "anniespratt",
      "total_collections": 76,
      "total_likes": 14509,
      "total_photos": 25035,
      "total_promoted_photos": 3190,
      "total_illustrations": 4,
      "total_promoted_illustrations": 0,
      "accepted_tos": true,
      "for_hire": false,
      "social": {
        "instagram_username": "anniespratt",
        "portfolio_url": "https://www.anniespratt.com",
        "twitter_username": "anniespratt",
        "paypal_email": null
      }
    }
  },
  {
    "id": "1YnBzhJISg4",
    "slug": "baby-clinging-on-back-1YnBzhJISg4",
    "alternative_slugs": {
      "en": "baby-clinging-on-back-1YnBzhJISg4",
      "es": "bebe-aferrado-a-la-espalda-1YnBzhJISg4",
      "ja": "背中にしがみつく赤ちゃん-1YnBzhJISg4",
      "fr": "baby-clinging-on-back-1YnBzhJISg4",
      "it": "bambino-aggrappato-sulla-schiena-1YnBzhJISg4",
      "ko": "등에-매달리는-아기-1YnBzhJISg4",
      "de": "baby-klammert-sich-an-den-rucken-1YnBzhJISg4",
      "pt": "bebe-agarrado-nas-costas-1YnBzhJISg4"
    },
    "created_at": "2016-09-11T11:51:37Z",
    "updated_at": "2024-10-03T13:32:27Z",
    "promoted_at": "2016-09-11T11:51:37Z",
    "width": 3999,
    "height": 2662,
    "color": "#262626",
    "blur_hash": "LcE{@0WUIoWV_NRkafj[-=WVs:af",
    "description": "Tropical mother and child",
    "alt_description": "baby clinging on back",
    "breadcrumbs": [],
    "urls": {
      "raw": "https://images.unsplash.com/photo-1473594659356-a404044aa2c2?ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHwzfHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3",
      "full": "https://images.unsplash.com/photo-1473594659356-a404044aa2c2?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHwzfHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3\u0026q=85",
      "regular": "https://images.unsplash.com/photo-1473594659356-a404044aa2c2?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHwzfHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
      "small": "https://images.unsplash.com/photo-1473594659356-a404044aa2c2?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHwzfHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
      "thumb": "https://images.unsplash.com/photo-1473594659356-a404044aa2c2?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHwzfHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
    },
    "links": {
      "self": "https://api.unsplash.com/photos/baby-clinging-on-back-1YnBzhJISg4",
      "html": "https://unsplash.com/photos/baby-clinging-on-back-1YnBzhJISg4",
      "download": "https://unsplash.com/photos/1YnBzhJISg4/download?ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHwzfHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww",
      "download_location": "https://api.unsplash.com/photos/1YnBzhJISg4/download?ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHwzfHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww"
    },
    "likes": 1354,
    "liked_by_user": false,
    "current_user_collections": [],
    "sponsorship": null,
    "topic_submissions": {},
    "asset_type": "photo",
    "user": {
      "id": "IFcEhJqem0Q",
      "username": "anniespratt",
      "name": "Annie Spratt",
      "twitter_username": "anniespratt",
      "portfolio_url": "https://www.anniespratt.com",
      "bio": "Hobbyist photographer from England, sharing my digital, film + vintage slide scans. Shooting a roll of film every day in 2024.",
      "location": "New Forest National Park, UK",
      "links": {
        "self": "https://api.unsplash.com/users/anniespratt",
        "html": "https://unsplash.com/@anniespratt",
        "photos": "https://api.unsplash.com/users/anniespratt/photos",
        "likes": "https://api.unsplash.com/users/anniespratt/likes",
        "portfolio": "https://api.unsplash.com/users/anniespratt/portfolio",
      },
      "profile_image": {
        "small": "https://images.unsplash.com/profile-1648828806223-1852f704c58aimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
        "medium": "https://images.unsplash.com/profile-1648828806223-1852f704c58aimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
        "large": "https://images.unsplash.com/profile-1648828806223-1852f704c58aimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128"
      },
      "instagram_username": "anniespratt",
      "total_collections": 76,
      "total_likes": 14509,
      "total_photos": 25035,

    }
  },
  {
    "id": "LqOO5Ko0zSo",
    "slug": "boy-in-white-shirt-sitting-on-brown-wooden-desk-chair-LqOO5Ko0zSo",
    "alternative_slugs": {
      "en": "boy-in-white-shirt-sitting-on-brown-wooden-desk-chair-LqOO5Ko0zSo",
      "es": "chico-con-camisa-blanca-sentado-en-una-silla-de-escritorio-de-madera-marron-LqOO5Ko0zSo",
      "ja": "茶色の木製の机の椅子に座る白いシャツの少年-LqOO5Ko0zSo",
      "fr": "boy-in-white-shirt-sitting-on-brown-wooden-desk-chair-LqOO5Ko0zSo",
      "it": "ragazzo-in-camicia-bianca-seduto-sulla-sedia-da-scrivania-di-legno-marrone-LqOO5Ko0zSo",
      "ko": "갈색-나무-책상-의자에-앉아있는-흰-셔츠를-입은-소년-LqOO5Ko0zSo",
      "de": "junge-im-weissen-hemd-sitzt-auf-braunem-schreibtischstuhl-aus-holz-LqOO5Ko0zSo",
      "pt": "menino-na-camisa-branca-sentado-na-cadeira-da-mesa-de-madeira-marrom-LqOO5Ko0zSo"
    },
    "created_at": "2017-06-13T17:51:42Z",
    "updated_at": "2024-10-02T18:11:08Z",
    "promoted_at": "2017-06-14T11:29:21Z",
    "width": 4032,
    "height": 2784,
    "color": "#260c0c",
    "blur_hash": "LFCY]$XoNIE0IqR*s.%20JDiSO%M",
    "description": "Ugandan student finding it too hard to study.  These African children are the sweetest kids on earth.  This was taken at a GODLOVESKIDS.com location in Nakasaki (nuh kasa kee) school district.  GodLovesKids.com is helping hundreds of children and orphans throughout the world.",
    "alt_description": "boy in white shirt sitting on brown wooden desk chair",
    "breadcrumbs": [],
    "urls": {
      "raw": "https://images.unsplash.com/photo-1497375638960-ca368c7231e4?ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHw0fHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3",
      "full": "https://images.unsplash.com/photo-1497375638960-ca368c7231e4?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHw0fHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3\u0026q=85",
      "regular": "https://images.unsplash.com/photo-1497375638960-ca368c7231e4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHw0fHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
      "small": "https://images.unsplash.com/photo-1497375638960-ca368c7231e4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHw0fHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
      "thumb": "https://images.unsplash.com/photo-1497375638960-ca368c7231e4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHw0fHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
    },
    "links": {
      "self": "https://api.unsplash.com/photos/boy-in-white-shirt-sitting-on-brown-wooden-desk-chair-LqOO5Ko0zSo",
      "html": "https://unsplash.com/photos/boy-in-white-shirt-sitting-on-brown-wooden-desk-chair-LqOO5Ko0zSo",
      "download": "https://unsplash.com/photos/LqOO5Ko0zSo/download?ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHw0fHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww",
      "download_location": "https://api.unsplash.com/photos/LqOO5Ko0zSo/download?ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHw0fHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww"
    },
    "likes": 691,
    "liked_by_user": false,
    "current_user_collections": [],
    "sponsorship": null,
    "topic_submissions": {},
    "asset_type": "photo",
    "user": {
      "id": "Qqodw97lwoU",
      "username": "wegenerb",
      "name": "bill wegener",
      "twitter_username": "wegenerb",
      "portfolio_url": "http://www.billwegener.net",

      "location": "Allen, Texas",
      "links": {
        "self": "https://api.unsplash.com/users/wegenerb",
        "html": "https://unsplash.com/@wegenerb",
        "photos": "https://api.unsplash.com/users/wegenerb/photos",
        "likes": "https://api.unsplash.com/users/wegenerb/likes",
        "portfolio": "https://api.unsplash.com/users/wegenerb/portfolio",
      },
      "profile_image": {
        "small": "https://images.unsplash.com/profile-1497375438813-3b77446ebe87?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
        "medium": "https://images.unsplash.com/profile-1497375438813-3b77446ebe87?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
        "large": "https://images.unsplash.com/profile-1497375438813-3b77446ebe87?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128"
      },
      "instagram_username": "wegenerb",
      "total_collections": 0,
      "total_likes": 273,
      "total_photos": 91,

    }
  },
  {
    "id": "7k91OUDYAQ0",
    "slug": "group-of-people-standing-on-brown-ground-7k91OUDYAQ0",
    "alternative_slugs": {
      "en": "group-of-people-standing-on-brown-ground-7k91OUDYAQ0",
      "es": "grupo-de-personas-de-pie-en-suelo-marron-7k91OUDYAQ0",
      "ja": "茶色の地面に立つ人々のグループ-7k91OUDYAQ0",
      "fr": "group-of-people-standing-on-brown-ground-7k91OUDYAQ0",
      "it": "gruppo-di-persone-in-piedi-su-terreno-marrone-7k91OUDYAQ0",
      "ko": "갈색-바탕에-서-있는-사람들의-무리-7k91OUDYAQ0",
      "de": "gruppe-von-menschen-die-auf-braunem-boden-stehen-7k91OUDYAQ0",
      "pt": "grupo-de-pessoas-em-pe-no-chao-marrom-7k91OUDYAQ0"
    },
    "created_at": "2018-01-11T08:19:10Z",
    "updated_at": "2024-10-04T11:35:55Z",
    "promoted_at": "2018-01-12T09:12:44Z",
    "width": 3001,
    "height": 4259,
    "color": "#404040",
    "blur_hash": "LVG*pLt9Ioad~VxuRjR+b_tRjFWB",
    "description": "Took this on a trip to Kargi, a remote nomadic settlement in Kenya. It’s been a while since I got to experience a people so constantly happy and full of joy as the people of here.",
    "alt_description": "group of people standing on brown ground",
    "breadcrumbs": [],
    "urls": {
      "raw": "https://images.unsplash.com/photo-1515658323406-25d61c141a6e?ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHw1fHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3",
      "full": "https://images.unsplash.com/photo-1515658323406-25d61c141a6e?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHw1fHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3\u0026q=85",
      "regular": "https://images.unsplash.com/photo-1515658323406-25d61c141a6e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHw1fHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
      "small": "https://images.unsplash.com/photo-1515658323406-25d61c141a6e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHw1fHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
      "thumb": "https://images.unsplash.com/photo-1515658323406-25d61c141a6e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHw1fHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
      "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1515658323406-25d61c141a6e"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/group-of-people-standing-on-brown-ground-7k91OUDYAQ0",
      "html": "https://unsplash.com/photos/group-of-people-standing-on-brown-ground-7k91OUDYAQ0",
      "download": "https://unsplash.com/photos/7k91OUDYAQ0/download?ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHw1fHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww",
      "download_location": "https://api.unsplash.com/photos/7k91OUDYAQ0/download?ixid=M3w2NjEzMzN8MHwxfHNlYXJjaHw1fHxBZnJpY2FufGVufDB8fHx8MTcyODE2NTExMHww"
    },
    "likes": 1523,
    "liked_by_user": false,
    "current_user_collections": [],
    "sponsorship": null,
    "topic_submissions": {
      "people": {
        "status": "approved",
        "approved_on": "2020-04-06T14:20:24Z"
      }
    },
    "asset_type": "photo",
    "user": {
      "id": "8yfgw6igYss",
      "updated_at": "2024-04-15T12:02:15Z",
      "username": "macharia",
      "name": "Ian Macharia",
      "first_name": "Ian",
      "last_name": "Macharia",
      "twitter_username": 'null',
      "portfolio_url": "http://www.aurum.studio",
      "bio": "Pictures tell stories, I like stories.",
      "location": 'null',
      "links": {
        "self": "https://api.unsplash.com/users/macharia",
        "html": "https://unsplash.com/@macharia",
        "photos": "https://api.unsplash.com/users/macharia/photos",
        "likes": "https://api.unsplash.com/users/macharia/likes",
        "portfolio": "https://api.unsplash.com/users/macharia/portfolio",
      },
      "profile_image": {
        "small": "https://images.unsplash.com/profile-fb-1485261982-0a7e88c66511.jpg?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
        "medium": "https://images.unsplash.com/profile-fb-1485261982-0a7e88c66511.jpg?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
        "large": "https://images.unsplash.com/profile-fb-1485261982-0a7e88c66511.jpg?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128"
      },
      "instagram_username": "ianmachariaphotography",
      "total_collections": 7,
      "total_likes": 26,
      "total_photos": 3,
      "total_promoted_photos": 2,
      "total_illustrations": 0,
      "total_promoted_illustrations": 0,
      "accepted_tos": false,
      "for_hire": false,
      "social": {
        "instagram_username": "ianmachariaphotography",
        "portfolio_url": "http://www.aurum.studio",
        "twitter_username": null,
        "paypal_email": null
      }
    }
  }]);
const isLoading = ref<boolean>(false);

const queryParams = ref<SearchQueryParams>({
  query: 'African',
})
const isModalVisible = ref(false)
const selectedPhoto = ref<Photo>()

// Function to open modal with selected image
const openModal = (photo: Photo) => {
  selectedPhoto.value = photo
  isModalVisible.value = true
}
const fetchPhotos = async () => {
  try {
    const response: PhotoData = await searchPhotos(queryParams.value);
    if (!response) return
    // photos.value = response.results
  } finally {
    isLoading.value = false;
  }
};

// Fetch photos on component mount
onMounted(() => {
  // fetchPhotos();
});
</script>

<template>
  <div class="home-page">
    <!-- header -->
    <header> Photos </header>
    <div class="header-bg"></div>

    <LoadingCard v-if="isLoading" :numOfCards="30" />
    <div v-else class="image-grid">
      <PhotoCard v-for="photo in photos" :key="photo.id" :photo @selected="openModal" />
    </div>

    <Modal v-model="isModalVisible">
      <!-- Passing custom content into the modal via slot -->
      <img :src="selectedPhoto?.urls?.regular" alt="Selected image" class="modal-image" />
    </Modal>
  </div>
</template>

<style scoped>
header {
  background: red;
}

.header-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background: #DDE3EA;
  z-index: -1;
}

.image-grid {
  column-count: 2;
  column-gap: 16px;
}


@media (max-width: 1024px) {
  .image-grid {
    column-count: 2;
  }
}

@media (max-width: 768px) {
  .image-grid {
    column-count: 1;
  }
}

/* LOADING  */

.loading-grid {
  column-count: 3;
  gap: 16px;
}

/* Shimmer animation */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }

  100% {
    background-position: 200% 0;
  }
}

@media (max-width: 480px) {
  .image-grid {
    column-count: 1;
    column-gap: 8px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .image-grid {
    column-count: 2;
    column-gap: 12px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .image-grid {
    column-count: 2;
    column-gap: 16px;
  }
}

@media (min-width: 1025px) and (max-width: 1440px) {
  .image-grid {
    column-count: 3;
    column-gap: 20px;
  }
}

@media (min-width: 1441px) {
  .image-grid {
    column-count: 3;
    column-gap: 24px;
  }
}
</style>
