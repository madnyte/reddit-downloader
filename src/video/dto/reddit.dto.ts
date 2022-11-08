export class RedditData {
  public approved_at_utc?: any;
  public subreddit?: string;
  public selftext?: string;
  public saved?: boolean;
  public mod_reason_title?: any;
  public gilded?: number;
  public clicked?: boolean;
  public title?: string;
  public subreddit_name_prefixed?: string;
  public hidden?: boolean;
  public pwls?: number;
  public link_flair_css_class?: string;
  public downs?: number;
  public thumbnail_height?: number;
  public top_awarded_type?: any;
  public parent_whitelist_status?: string;
  public hide_score?: boolean;
  public name?: string;
  public quarantine?: boolean;
  public link_flair_text_color?: string;
  public upvote_ratio?: number;
  public author_flair_background_color?: any;
  public ups?: number;
  public domain?: string;
  public thumbnail_width?: number;
  public author_flair_template_id?: any;
  public is_original_content?: boolean;
  public author_fullname?: string;
  public secure_media?: SecureMedia;
  public is_reddit_media_domain?: boolean;
  public is_meta?: boolean;
  public category?: any;
  public link_flair_text?: string;
  public can_mod_post?: boolean;
  public score?: number;
  public approved_by?: any;
  public is_created_from_ads_ui?: boolean;
  public author_premium?: boolean;
  public thumbnail?: string;
  public edited?: boolean;
  public author_flair_css_class?: any;
  public gildings?: Gildings;
  public post_hint?: string;
  public content_categories?: any;
  public is_self?: boolean;
  public subreddit_type?: string;
  public created?: number;
  public link_flair_type?: string;
  public wls?: number;
  public removed_by_category?: any;
  public banned_by?: any;
  public author_flair_type?: string;
  public total_awards_received?: number;
  public allow_live_comments?: boolean;
  public selftext_html?: any;
  public likes?: any;
  public suggested_sort?: any;
  public banned_at_utc?: any;
  public url_overridden_by_dest?: string;
  public view_count?: any;
  public archived?: boolean;
  public no_follow?: boolean;
  public is_crosspostable?: boolean;
  public pinned?: boolean;
  public over_18?: boolean;
  public preview?: Preview;
  public all_awardings?: AllAwardings[];
  public media_only?: boolean;
  public link_flair_template_id?: string;
  public can_gild?: boolean;
  public spoiler?: boolean;
  public locked?: boolean;
  public author_flair_text?: any;
  public visited?: boolean;
  public removed_by?: any;
  public mod_note?: any;
  public distinguished?: any;
  public subreddit_id?: string;
  public author_is_blocked?: boolean;
  public mod_reason_by?: any;
  public num_reports?: any;
  public removal_reason?: any;
  public link_flair_background_color?: string;
  public id?: string;
  public is_robot_indexable?: boolean;
  public num_duplicates?: number;
  public report_reasons?: any;
  public author?: string;
  public discussion_type?: any;
  public num_comments?: number;
  public send_replies?: boolean;
  public media?: Media;
  public contest_mode?: boolean;
  public author_patreon_flair?: boolean;
  public author_flair_text_color?: any;
  public permalink?: string;
  public whitelist_status?: string;
  public stickied?: boolean;
  public url?: string;
  public subreddit_subscribers?: number;
  public created_utc?: number;
  public num_crossposts?: number;
  public is_video?: boolean;
}

export class SecureMedia {
  public reddit_video?: RedditVideo;
}

export class RedditVideo {
  public bitrate_kbps?: number;
  public fallback_url?: string;
  public height?: number;
  public width?: number;
  public scrubber_media_url?: string;
  public dash_url?: string;
  public duration?: number;
  public hls_url?: string;
  public is_gif?: boolean;
  public transcoding_status?: string;
}

export class Gildings {
  public gid_1?: number;
}

export class Preview {
  public images?: Images[];
  public enabled?: boolean;
}

export class Images {
  public source?: Source;
  public resolutions?: Resolutions[];
  public id?: string;
}

export class Source {
  public url?: string;
  public width?: number;
  public height?: number;
}

export class Resolutions {
  public url?: string;
  public width?: number;
  public height?: number;
}

export class Media {
  public reddit_video?: RedditVideo;
}

export class AllAwardings {
  public giver_coin_reward?: any;
  public subreddit_id?: any;
  public is_new?: boolean;
  public days_of_drip_extension?: any;
  public coin_price?: number;
  public id?: string;
  public penny_donate?: any;
  public coin_reward?: number;
  public icon_url?: string;
  public days_of_premium?: any;
  public icon_height?: number;
  public tiers_by_required_awardings?: any;
  public resized_icons?: ResizedIcons[];
  public icon_width?: number;
  public static_icon_width?: number;
  public start_date?: any;
  public is_enabled?: boolean;
  public awardings_required_to_grant_benefits?: any;
  public description?: string;
  public end_date?: any;
  public sticky_duration_seconds?: any;
  public subreddit_coin_reward?: number;
  public count?: number;
  public static_icon_height?: number;
  public name?: string;
  public resized_static_icons?: ResizedStaticIcons[];
  public icon_format?: any;
  public award_sub_type?: string;
  public penny_price?: any;
  public award_type?: string;
  public static_icon_url?: string;
}

export class ResizedIcons {
  public url?: string;
  public width?: number;
  public height?: number;
}

export class ResizedStaticIcons {
  public url?: string;
  public width?: number;
  public height?: number;
}
