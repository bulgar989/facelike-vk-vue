import Api from "./Api";

export default {
    all () {
        return Api.get('')
    },
    watch (id) {
        return Api.get('users.get', {params: {"user_ids": id, "fields": "photo_id, verified, sex, bdate, city, country, home_town, has_photo, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, domain, has_mobile, contacts, site, education, universities, schools, status, last_seen, followers_count, common_count, occupation, nickname, relatives, relation, personal, connections, exports, activities, interests, music, movies, tv, books, games, about, quotes, can_post, can_see_all_posts, can_see_audio, can_write_private_message, can_send_friend_request, is_favorite, is_hidden_from_feed, timezone, screen_name, maiden_name, crop_photo, is_friend, friend_status, career, military, blacklisted, blacklisted_by_me, can_be_invited_group"}})
    },
    search ({offset}) {
        return Api.get('users.search', {params: {"sex": 1, "count": 1, "offset": offset, "fields": "photo_400_orig"}})
    }
}