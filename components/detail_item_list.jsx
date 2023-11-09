import DetailsItem from "./details_item";

const DetailItemList = ({ dua0, dua1, dua2 }) => {
  // const data = [
  //   {
  //     id: 3,
  //     cat_id: 1,
  //     subcat_id: 1,
  //     dua_id: 3,
  //     dua_name_bn: "দাসমুক্তির সওয়াব",
  //     dua_name_en: "The reward of freeing of a slave",
  //     top_bn: "নিম্নোক্ত বাণীটি ১০ বার বলবে -",
  //     top_en: "Say the following statement 10 times -",
  //     dua_arabic:
  //       "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
  //     dua_indopak:
  //       "لَا اِلٰهَ اِلَّا اللّٰهُ وَحْدَهٗ لَا شَرِيْكَ لَهٗ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، وَهُوَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ",
  //     clean_arabic:
  //       "لا اله الا الله وحده لا شريك له له الملك وله الحمد وهو علي كل شيء قدير",
  //     transliteration_bn:
  //       "লা- ইলা-হা ইল্লাল্লা-হু, ওয়া‘হদাহু লা- শারীকা লাহু, লাহুল মুলকু ওয়া লাহুল ‘হামদু, ওয়া হুআ ‘আলা- কুল্লি শাইয়্যিন ক্বাদীর",
  //     transliteration_en:
  //       "Laa ilahaa illAllahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir",
  //     translation_bn:
  //       "আল্লাহ্‌ ছাড়া কোনো সত্য মাবুদ নেই, তাঁর কোনো শরীক নেই; রাজত্ব তাঁরই, সমস্ত প্রশংসাও তাঁর; আর তিনি সকল কিছুর উপর ক্ষমতাবান।",
  //     translation_en:
  //       "None has the right to be worshipped but Allah alone, Who has no partner. His is the dominion and His is the praise, and He is Able to do all things.",
  //     bottom_bn:
  //       "রাসূলুল্লাহ্‌ (ﷺ) বলেন, যে ব্যক্তি উপরোক্ত কথাটি ১০ বার বলবে এটা তার জন্য এমন হবে যেন সে ইসমাঈল (আঃ)-এর সন্তানদের চারজনকে দাসত্ব থেকে মুক্ত করল।",
  //     bottom_en:
  //       "The Prophet (ﷺ) said: The person who says the above statement 10 times It would be as if he had freed four of Ishmael's (As) children from slavery.",
  //     refference_bn: "বুখারীঃ ৬৪০৪",
  //     refference_en: "Bukhari: 6404",
  //     audio: "http://www.ihadis.com/duaaudiofinal/3.mp3",
  //   },
  // ];
  return (
    <div>
      <DetailsItem dua={dua0} />
      <DetailsItem dua={dua1} />
      <DetailsItem dua={dua2} />
    </div>
  );
};

export default DetailItemList;
