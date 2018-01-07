/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.1.1
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bugie-api-ts
 * Do not edit these files manually.
 */
import { HttpClient } from '../http';
import { CEListOfForumRecruitmentDetailServerResponse, ForumPostSortEnum, ForumRecruitmentDetailServerResponse, ForumTopicsCategoryFiltersEnum, ForumTopicsQuickDateEnum, ForumTopicsSortEnum, ListOfTagResponseServerResponse, PostSearchResponseServerResponse, SaveMessageResultServerResponse } from './interfaces';
import { int64ServerResponse } from '../platform';
export interface GetTopicsPagedParams {
    /** A category filter */
    categoryFilter: ForumTopicsCategoryFiltersEnum;
    /** The group, if any. */
    group: number;
    /**
     * Comma seperated list of locales posts must match to return in the result list.
     * Default 'en'
     */
    locales?: string;
    /** Zero paged page number */
    page: number;
    /** Unused */
    pageSize: number;
    /** A date filter. */
    quickDate: ForumTopicsQuickDateEnum;
    /** The sort mode. */
    sort: ForumTopicsSortEnum;
    /** The tags to search, if any. */
    tagstring?: string;
}
/** Get topics from any forum. */
export declare function getTopicsPaged(http: HttpClient, params: GetTopicsPagedParams): Promise<PostSearchResponseServerResponse>;
export interface GetCoreTopicsPagedParams {
    /** The category filter. */
    categoryFilter: ForumTopicsCategoryFiltersEnum;
    /**
     * Comma seperated list of locales posts must match to return in the result list.
     * Default 'en'
     */
    locales?: string;
    /** Zero base page */
    page: number;
    /** The date filter. */
    quickDate: ForumTopicsQuickDateEnum;
    /** The sort mode. */
    sort: ForumTopicsSortEnum;
}
/** Gets a listing of all topics marked as part of the core group. */
export declare function getCoreTopicsPaged(http: HttpClient, params: GetCoreTopicsPagedParams): Promise<PostSearchResponseServerResponse>;
export interface GetPostsThreadedPagedParams {
    getParentPost: boolean;
    page: number;
    pageSize: number;
    parentPostId: number;
    replySize: number;
    rootThreadMode: boolean;
    /** If this value is not null or empty, banned posts are requested to be returned */
    showbanned?: string;
    sortMode: ForumPostSortEnum;
}
/**
 * Returns a thread of posts at the given parent, optionally returning replies to
 * those posts as well as the original parent.
 */
export declare function getPostsThreadedPaged(http: HttpClient, params: GetPostsThreadedPagedParams): Promise<PostSearchResponseServerResponse>;
export interface GetPostsThreadedPagedFromChildParams {
    childPostId: number;
    page: number;
    pageSize: number;
    replySize: number;
    rootThreadMode: boolean;
    /** If this value is not null or empty, banned posts are requested to be returned */
    showbanned?: string;
    sortMode: ForumPostSortEnum;
}
/**
 * Returns a thread of posts starting at the topicId of the input childPostId,
 * optionally returning replies to those posts as well as the original parent.
 */
export declare function getPostsThreadedPagedFromChild(http: HttpClient, params: GetPostsThreadedPagedFromChildParams): Promise<PostSearchResponseServerResponse>;
export interface GetPostAndParentParams {
    childPostId: number;
    /** If this value is not null or empty, banned posts are requested to be returned */
    showbanned?: string;
}
/** Returns the post specified and its immediate parent. */
export declare function getPostAndParent(http: HttpClient, params: GetPostAndParentParams): Promise<PostSearchResponseServerResponse>;
export interface GetPostAndParentAwaitingApprovalParams {
    childPostId: number;
    /** If this value is not null or empty, banned posts are requested to be returned */
    showbanned?: string;
}
/**
 * Returns the post specified and its immediate parent of posts that are awaiting
 * approval.
 */
export declare function getPostAndParentAwaitingApproval(http: HttpClient, params: GetPostAndParentAwaitingApprovalParams): Promise<PostSearchResponseServerResponse>;
export interface GetTopicForContentParams {
    contentId: number;
}
/** Gets the post Id for the given content item's comments, if it exists. */
export declare function getTopicForContent(http: HttpClient, params: GetTopicForContentParams): Promise<int64ServerResponse>;
export interface GetForumTagSuggestionsParams {
    /** The partial tag input to generate suggestions from. */
    partialtag?: string;
}
/**
 * Gets tag suggestions based on partial text entry, matching them with other tags
 * previously used in the forums.
 */
export declare function getForumTagSuggestions(http: HttpClient, params: GetForumTagSuggestionsParams): Promise<ListOfTagResponseServerResponse>;
export interface GetPollParams {
    /** The post id of the topic that has the poll. */
    topicId: number;
}
/** Gets the specified forum poll. */
export declare function getPoll(http: HttpClient, params: GetPollParams): Promise<PostSearchResponseServerResponse>;
export interface JoinFireteamThreadParams {
    /** The post id of the recruitment topic you wish to join. */
    topicId: number;
}
/**
 * Allows a user to slot themselves into a recruitment thread fireteam slot.
 * Returns the new state of the fireteam.
 */
export declare function joinFireteamThread(http: HttpClient, params: JoinFireteamThreadParams): Promise<ForumRecruitmentDetailServerResponse>;
export interface LeaveFireteamThreadParams {
    /** The post id of the recruitment topic you wish to leave. */
    topicId: number;
}
/**
 * Allows a user to remove themselves from a recruitment thread fireteam slot.
 * Returns the new state of the fireteam.
 */
export declare function leaveFireteamThread(http: HttpClient, params: LeaveFireteamThreadParams): Promise<ForumRecruitmentDetailServerResponse>;
export interface KickBanFireteamApplicantParams {
    /** The id of the user you wish to kick. */
    targetMembershipId: number;
    /** The post id of the recruitment topic you wish to join. */
    topicId: number;
}
/**
 * Allows a recruitment thread owner to kick a join user from the fireteam. Returns
 * the new state of the fireteam.
 */
export declare function kickBanFireteamApplicant(http: HttpClient, params: KickBanFireteamApplicantParams): Promise<ForumRecruitmentDetailServerResponse>;
export interface ApproveFireteamThreadParams {
    /** The post id of the recruitment topic to approve. */
    topicId: number;
}
/**
 * Allows the owner of a fireteam thread to approve all joined members and start a
 * private message conversation with them.
 */
export declare function approveFireteamThread(http: HttpClient, params: ApproveFireteamThreadParams): Promise<SaveMessageResultServerResponse>;
export interface GetRecruitmentThreadSummariesParams {
    body: number[];
}
/**
 * Allows the caller to get a list of to 25 recruitment thread summary information
 * objects.
 */
export declare function getRecruitmentThreadSummaries(http: HttpClient, params: GetRecruitmentThreadSummariesParams): Promise<CEListOfForumRecruitmentDetailServerResponse>;
