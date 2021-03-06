/**
 * A user or organization
 */
export interface Actor {
  avatar_url?: string;
  bio?: string;
  /** The website URL from the profile page */
  blog?: string;
  collaborators?: number;
  company?: string;
  /** ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ */
  created_at?: string;
  disk_usage?: number;
  /** Note: The returned email is the user’s publicly visible email address (or null if the user has not specified a public email address in their profile). */
  email?: string;
  followers?: number;
  followers_url?: string;
  following?: number;
  following_url?: string;
  gists_url?: string;
  gravatar_id?: string;
  hireable?: boolean;
  html_url?: string;
  id?: number;
  location?: string;
  /** The account username */
  login?: string;
  /** The full account name */
  name?: string;
  organizations_url?: string;
  owned_private_repos?: number;
  plan?: {
    collaborators?: number;
    name?: string;
    private_repos?: number;
    space?: number;
  };
  private_gists?: number;
  public_gists?: number;
  public_repos?: number;
  starred_url?: string;
  subscriptions_url?: string;
  total_private_repos?: number;
  type?: "User" | "Organization";
  /** ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ */
  updated_at?: string;
  url?: string;
}
export interface Asset {
  content_type?: string;
  created_at?: string;
  download_count?: number;
  id?: number;
  label?: string;
  name?: string;
  size?: number;
  state?: string;
  updated_at?: string;
  uploader?: User;
  url?: string;
}
export interface AssetPatch {
  label?: string;
  name: string;
}
export declare type Assets = Asset[];
export declare type Assignees = User[];
export interface Blob {
  content?: string;
  encoding?: "utf-8" | "base64";
  sha?: string;
  size?: number;
}
export interface Blobs {
  sha?: string;
}
export interface Branch {
  _links?: {
    html?: string;
    self?: string;
  };
  commit?: {
    author?: User;
    commit?: {
      author?: {
        date?: string;
        email?: string;
        name?: string;
      };
      committer?: {
        date?: string;
        email?: string;
        name?: string;
      };
      message?: string;
      tree?: {
        sha?: string;
        url?: string;
      };
      url?: string;
    };
    committer?: User;
    parents?: {
      sha?: string;
      url?: string;
    }[];
    sha?: string;
    url?: string;
  };
  name?: string;
}
export declare type Branches = {
  commit?: {
    sha?: string;
    url?: string;
  };
  name?: string;
}[];
export declare type CodeFrequencyStats = number[];
export interface Comment {
  body?: string;
}
export interface CommentBody {
  body: string;
}
export declare type Comments = {
  body?: string;
  created_at?: string;
  id?: number;
  url?: string;
  user?: User;
}[];
export interface Commit {
  author?: User;
  commit?: {
    author?: {
      date?: string;
      email?: string;
      name?: string;
    };
    committer?: {
      date?: string;
      email?: string;
      name?: string;
    };
    message?: string;
    tree?: {
      sha?: string;
      url?: string;
    };
    url?: string;
  };
  committer?: User;
  files?: {
    additions?: number;
    blob_url?: string;
    changes?: number;
    deletions?: number;
    filename?: string;
    patch?: string;
    raw_url?: string;
    status?: string;
  }[];
  parents?: {
    sha?: string;
    url?: string;
  }[];
  sha?: string;
  stats?: {
    additions?: number;
    deletions?: number;
    total?: number;
  };
  url?: string;
}
export declare type CommitActivityStats = {
  days?: number[];
  total?: number;
  week?: number;
}[];
export interface CommitComment {
  body?: string;
  commit_id?: string;
  /** ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ */
  created_at?: string;
  html_url?: string;
  id?: number;
  line?: number;
  path?: string;
  position?: number;
  /** ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ */
  updated_at?: string;
  url?: string;
  user?: User;
}
export interface CommitCommentBody {
  body: string;
  /** Deprecated - Use position parameter instead. */
  line?: string;
  /** Line number in the file to comment on. Defaults to null. */
  number?: string;
  /** Relative path of the file to comment on. */
  path?: string;
  /** Line index in the diff to comment on. */
  position?: number;
  /** SHA of the commit to comment on. */
  sha: string;
}
export declare type Commits = {
  author?: User;
  commit?: {
    author?: {
      date?: string;
      email?: string;
      name?: string;
    };
    committer?: {
      date?: string;
      email?: string;
      name?: string;
    };
    message?: string;
    tree?: {
      sha?: string;
      url?: string;
    };
    url?: string;
  };
  committer?: User;
  parents?: {
    sha?: string;
    url?: string;
  }[];
  sha?: string;
  url?: string;
}[];
export interface CompareCommits {
  ahead_by?: number;
  base_commit?: {
    author?: User;
    commit?: {
      author?: {
        date?: string;
        email?: string;
        name?: string;
      };
      committer?: {
        date?: string;
        email?: string;
        name?: string;
      };
      message?: string;
      tree?: {
        sha?: string;
        url?: string;
      };
      url?: string;
    };
    committer?: User;
    parents?: {
      sha?: string;
      url?: string;
    }[];
    sha?: string;
    url?: string;
  };
  behind_by?: number;
  commits?: {
    author?: User;
    commit?: {
      author?: {
        date?: string;
        email?: string;
        name?: string;
      };
      committer?: {
        date?: string;
        email?: string;
        name?: string;
      };
      message?: string;
      tree?: {
        sha?: string;
        url?: string;
      };
      url?: string;
    };
    committer?: User;
    parents?: {
      sha?: string;
      url?: string;
    }[];
    sha?: string;
    url?: string;
  }[];
  diff_url?: string;
  files?: {
    additions?: number;
    blob_url?: string;
    changes?: number;
    contents_url?: string;
    deletions?: number;
    filename?: string;
    patch?: string;
    raw_url?: string;
    sha?: string;
    status?: string;
  }[];
  html_url?: string;
  patch_url?: string;
  permalink_url?: string;
  status?: string;
  total_commits?: number;
  url?: string;
}
export interface ContentsPath {
  _links?: {
    git?: string;
    html?: string;
    self?: string;
  };
  content?: string;
  encoding?: string;
  git_url?: string;
  html_url?: string;
  name?: string;
  path?: string;
  sha?: string;
  size?: number;
  type?: string;
  url?: string;
}
export declare type ContributorsStats = {
  author?: {
    avatar_url?: string;
    gravatar_id?: string;
    id?: number;
    login?: string;
    url?: string;
  };
  total?: number;
  weeks?: {
    a?: number;
    c?: number;
    d?: number;
    w?: string;
  }[];
}[];
export interface CreateFile {
  commit?: {
    author?: {
      date?: string;
      email?: string;
      name?: string;
    };
    committer?: {
      date?: string;
      email?: string;
      name?: string;
    };
    html_url?: string;
    message?: string;
    parents?: {
      html_url?: string;
      sha?: string;
      url?: string;
    }[];
    sha?: string;
    tree?: {
      sha?: string;
      url?: string;
    };
    url?: string;
  };
  content?: {
    _links?: {
      git?: string;
      html?: string;
      self?: string;
    };
    git_url?: string;
    html_url?: string;
    name?: string;
    path?: string;
    sha?: string;
    size?: number;
    type?: string;
    url?: string;
  };
}
export interface CreateFileBody {
  committer?: {
    email?: string;
    name?: string;
  };
  content?: string;
  message?: string;
}
export interface DeleteFile {
  commit?: {
    author?: {
      date?: string;
      email?: string;
      name?: string;
    };
    committer?: {
      date?: string;
      email?: string;
      name?: string;
    };
    html_url?: string;
    message?: string;
    parents?: {
      html_url?: string;
      sha?: string;
      url?: string;
    };
    sha?: string;
    tree?: {
      sha?: string;
      url?: string;
    };
    url?: string;
  };
  content?: string;
}
export interface DeleteFileBody {
  committer?: {
    email?: string;
    name?: string;
  };
  message?: string;
  sha?: string;
}
export interface Deployment {
  description?: string;
  payload?: {
    deploy_user?: string;
    environment?: string;
    room_id?: number;
  };
  ref?: string;
}
export interface DeploymentResp {
  created_at?: string;
  creator?: User;
  description?: string;
  id?: number;
  payload?: string;
  sha?: string;
  statuses_url?: string;
  updated_at?: string;
  url?: string;
}
export declare type DeploymentStatuses = {
  created_at?: string;
  creator?: User;
  description?: string;
  id?: number;
  payload?: string;
  state?: string;
  target_url?: string;
  updated_at?: string;
  url?: string;
}[];
export interface DeploymentStatusesCreate {
  description?: string;
  state?: string;
  target_url?: string;
}
export interface Download {
  content_type?: string;
  description?: string;
  download_count?: number;
  html_url?: string;
  id?: number;
  name?: string;
  size?: number;
  url?: string;
}
export declare type Downloads = Download[];
export interface EditTeam {
  name: string;
  permission?: "pull" | "push" | "admin";
}
export declare type EmailsPost = string[];
export declare type Emojis = Record<string, string>;
export interface Event {
  actor?: Actor;
  created_at?: object;
  id?: number;
  org?: Organization;
  payload?: object;
  public?: boolean;
  repo?: {
    id?: number;
    name?: string;
    url?: string;
  };
  type?: string;
}
export declare type Events = Event[];
export interface Feeds {
  _links?: {
    current_user?: {
      href?: string;
      type?: string;
    };
    current_user_actor?: {
      href?: string;
      type?: string;
    };
    current_user_organization?: {
      href?: string;
      type?: string;
    };
    current_user_public?: {
      href?: string;
      type?: string;
    };
    timeline?: {
      href?: string;
      type?: string;
    };
    user?: {
      href?: string;
      type?: string;
    };
  };
  current_user_actor_url?: string;
  current_user_organization_url?: string;
  current_user_public?: string;
  current_user_url?: string;
  timeline_url?: string;
  user_url?: string;
}
export interface ForkBody {
  organization?: string;
}
export declare type Forks = Repos;
export interface Gist {
  comments?: number;
  comments_url?: string;
  /** Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. */
  created_at?: string;
  description?: string;
  files?: {
    "ring.erl"?: {
      filename?: string;
      raw_url?: string;
      size?: number;
    };
  };
  forks?: {
    created_at?: string;
    url?: string;
    user?: User;
  }[];
  git_pull_url?: string;
  git_push_url?: string;
  history?: {
    change_status?: {
      additions?: number;
      deletions?: number;
      total?: number;
    };
    committed_at?: string;
    url?: string;
    user?: User;
    version?: string;
  }[];
  html_url?: string;
  id?: string;
  public?: boolean;
  url?: string;
  user?: User;
}
export declare type Gists = {
  comments?: number;
  comments_url?: string;
  created_at?: string;
  description?: string;
  files?: {
    "ring.erl"?: {
      filename?: string;
      raw_url?: string;
      size?: number;
    };
  };
  git_pull_url?: string;
  git_push_url?: string;
  html_url?: string;
  id?: string;
  public?: boolean;
  url?: string;
  user?: User;
}[];
export interface GitCommit {
  author?: {
    date?: string;
    email?: string;
    name?: string;
  };
  message?: string;
  parents?: string;
  tree?: string;
}
export interface GitRefPatch {
  force?: boolean;
  sha?: string;
}
export declare type Gitignore = any[];
export interface GitignoreLang {
  name?: string;
  source?: string;
}
export interface HeadBranch {
  object?: {
    sha?: string;
    type?: string;
    url?: string;
  };
  ref?: string;
  url?: string;
}
export declare type Hook = {
  active?: boolean;
  config?: {
    content_type?: string;
    url?: string;
  };
  created_at?: string;
  events?: (
    | "push"
    | "issues"
    | "issue_comment"
    | "commit_comment"
    | "pull_request"
    | "pull_request_review_comment"
    | "gollum"
    | "watch"
    | "download"
    | "fork"
    | "fork_apply"
    | "member"
    | "public"
    | "team_add"
    | "status"
  )[];
  id?: number;
  name?: string;
  updated_at?: string;
  url?: string;
}[];
export interface HookBody {
  active?: boolean;
  add_events?: string[];
}
export interface Issue {
  assignee?: string;
  body?: string;
  labels?: string[];
  milestone?: number;
  title?: string;
}
export interface IssueEvent {
  actor?: Actor;
  commit_id?: string;
  /** ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ */
  created_at?: string;
  event?: string;
  issue?: {
    assignee?: User;
    body?: string;
    closed_at?: string;
    comments?: number;
    created_at?: string;
    html_url?: string;
    labels?: {
      color?: string;
      name?: string;
      url?: string;
    }[];
    milestone?: {
      closed_issues?: number;
      created_at?: string;
      creator?: User;
      description?: string;
      due_on?: string;
      number?: number;
      open_issues?: number;
      state?: "open" | "closed";
      title?: string;
      url?: string;
    };
    number?: number;
    pull_request?: {
      diff_url?: string;
      html_url?: string;
      patch_url?: string;
    };
    state?: "open" | "closed";
    title?: string;
    updated_at?: string;
    url?: string;
    user?: User;
  };
  url?: string;
}
export declare type IssueEvents = IssueEvent[];
export declare type Issues = {
  assignee?: User;
  body?: string;
  closed_at?: string;
  comments?: number;
  created_at?: string;
  html_url?: string;
  labels?: {
    color?: string;
    name?: string;
    url?: string;
  }[];
  milestone?: {
    closed_issues?: number;
    created_at?: string;
    creator?: User;
    description?: string;
    due_on?: string;
    number?: number;
    open_issues?: number;
    state?: "open" | "closed";
    title?: string;
    url?: string;
  };
  number?: number;
  pull_request?: {
    diff_url?: string;
    html_url?: string;
    patch_url?: string;
  };
  state?: "open" | "closed";
  title?: string;
  updated_at?: string;
  url?: string;
  user?: User;
}[];
export interface IssuesComment {
  body?: string;
  /** ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ */
  created_at?: string;
  html_url?: string;
  id?: number;
  /** ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ */
  updated_at?: string;
  url?: string;
  user?: User;
}
export declare type IssuesComments = {
  _links?: {
    html?: {
      href?: string;
    };
    pull_request?: {
      href?: string;
    };
    self?: {
      href?: string;
    };
  };
  body?: string;
  commit_id?: string;
  created_at?: string;
  id?: number;
  path?: string;
  position?: number;
  updated_at?: string;
  url?: string;
  user?: User;
}[];
export declare type Keys = {
  id?: number;
  key?: string;
  title?: string;
  url?: string;
}[];
export interface Label {
  color?: string;
  name?: string;
  url?: string;
}
export declare type Labels = {
  color?: string;
  name?: string;
  url?: string;
}[];
export declare type Languages = Record<string, number>;
export interface Markdown {
  context?: string;
  mode?: string;
  text?: string;
}
export interface Merge {
  merged?: boolean;
  message?: string;
  sha?: string;
}
export interface MergePullBody {
  commit_message?: string;
}
export interface MergesBody {
  base?: string;
  commit_message?: string;
  head?: string;
}
export interface MergesConflict {
  /** Error message */
  message?: string;
}
export interface MergesSuccessful {
  author?: User;
  comments_url?: string;
  commit?: {
    author?: {
      date?: string;
      email?: string;
      name?: string;
    };
    comment_count?: number;
    committer?: {
      date?: string;
      email?: string;
      name?: string;
    };
    message?: string;
    tree?: {
      sha?: string;
      url?: string;
    };
    url?: string;
  };
  committer?: User;
  merged?: boolean;
  message?: string;
  parents?: {
    sha?: string;
    url?: string;
  }[];
  sha?: string;
  url?: string;
}
export interface Meta {
  git?: string[];
  hooks?: string[];
}
export interface Milestone {
  closed_issues?: number;
  /** ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ */
  created_at?: string;
  creator?: User;
  description?: string;
  /** ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ */
  due_on?: string;
  number?: number;
  open_issues?: number;
  state?: "open" | "closed";
  title?: string;
  url?: string;
}
export interface MilestoneUpdate {
  description?: string;
  due_on?: string;
  state?: string;
  title?: string;
}
export interface NotificationMarkRead {
  last_read_at?: string;
}
export interface Notifications {
  id?: number;
  last_read_at?: string;
  reason?: string;
  repository?: {
    description?: string;
    fork?: boolean;
    full_name?: string;
    html_url?: string;
    id?: number;
    name?: string;
    owner?: Actor;
    private?: boolean;
    url?: string;
  };
  subject?: {
    latest_comment_url?: string;
    title?: string;
    type?: string;
    url?: string;
  };
  unread?: boolean;
  updated_at?: string;
  url?: string;
}
export interface OrgTeamsPost {
  name: string;
  permission?: "pull" | "push" | "admin";
  repo_names?: string[];
}
export declare type Organization = Actor & any;
export interface OrganizationAsTeamMember {
  errors?: {
    code?: string;
    field?: string;
    resource?: string;
  }[];
  message?: string;
}
export interface ParticipationStats {
  all?: number[];
  owner?: number[];
}
export interface PatchGist {
  description?: string;
  files?: {
    "delete_this_file.txt"?: string;
    "file1.txt"?: {
      content?: string;
    };
    "new_file.txt"?: {
      content?: string;
    };
    "old_name.txt"?: {
      content?: string;
      filename?: string;
    };
  };
}
export interface PatchOrg {
  /** Billing email address. This address is not publicized. */
  billing_email?: string;
  company?: string;
  /** Publicly visible email address. */
  email?: string;
  location?: string;
  name?: string;
}
export interface PostGist {
  description?: string;
  files?: {
    "file1.txt"?: {
      content?: string;
    };
  };
  public?: boolean;
}
export interface PostRepo {
  /** True to create an initial commit with empty README. Default is false. */
  auto_init?: boolean;
  description?: string;
  /** Desired language or platform .gitignore template to apply. Use the name of the template without the extension. For example, "Haskell" Ignored if auto_init parameter is not provided.  */
  gitignore_template?: string;
  /** True to enable downloads for this repository, false to disable them. Default is true. */
  has_downloads?: boolean;
  /** True to enable issues for this repository, false to disable them. Default is true. */
  has_issues?: boolean;
  /** True to enable the wiki for this repository, false to disable it. Default is true. */
  has_wiki?: boolean;
  homepage?: string;
  name: string;
  /** True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. */
  private?: boolean;
  /** The id of the team that will be granted access to this repository. This is only valid when creating a repo in an organization. */
  team_id?: number;
}
export interface PullRequest {
  _links?: {
    comments?: {
      href?: string;
    };
    html?: {
      href?: string;
    };
    review_comments?: {
      href?: string;
    };
    self?: {
      href?: string;
    };
  };
  additions?: number;
  base?: {
    label?: string;
    ref?: string;
    repo?: Repo;
    sha?: string;
    user?: {
      avatar_url?: string;
      gravatar_id?: string;
      id?: number;
      login?: string;
      url?: string;
    };
  };
  body?: string;
  changed_files?: number;
  closed_at?: string;
  comments?: number;
  commits?: number;
  created_at?: string;
  deletions?: number;
  diff_url?: string;
  head?: {
    label?: string;
    ref?: string;
    repo?: Repo;
    sha?: string;
    user?: {
      avatar_url?: string;
      gravatar_id?: string;
      id?: number;
      login?: string;
      url?: string;
    };
  };
  html_url?: string;
  issue_url?: string;
  merge_commit_sha?: string;
  mergeable?: boolean;
  merged?: boolean;
  merged_at?: string;
  merged_by?: {
    avatar_url?: string;
    gravatar_id?: string;
    id?: number;
    login?: string;
    url?: string;
  };
  number?: number;
  patch_url?: string;
  state?: string;
  title?: string;
  updated_at?: string;
  url?: string;
  user?: {
    avatar_url?: string;
    gravatar_id?: string;
    id?: number;
    login?: string;
    url?: string;
  };
}
export interface PullUpdate {
  body?: string;
  state?: string;
  title?: string;
}
export declare type Pulls = {
  _links?: {
    comments?: {
      href?: string;
    };
    html?: {
      href?: string;
    };
    review_comments?: {
      href?: string;
    };
    self?: {
      href?: string;
    };
  };
  base?: {
    label?: string;
    ref?: string;
    repo?: Repo;
    sha?: string;
    user?: {
      avatar_url?: string;
      gravatar_id?: string;
      id?: number;
      login?: string;
      url?: string;
    };
  };
  body?: string;
  closed_at?: string;
  created_at?: string;
  diff_url?: string;
  head?: {
    label?: string;
    ref?: string;
    repo?: Repo;
    sha?: string;
    user?: {
      avatar_url?: string;
      gravatar_id?: string;
      id?: number;
      login?: string;
      url?: string;
    };
  };
  html_url?: string;
  issue_url?: string;
  merged_at?: string;
  number?: number;
  patch_url?: string;
  state?: "open" | "closed";
  title?: string;
  updated_at?: string;
  url?: string;
  user?: {
    avatar_url?: string;
    gravatar_id?: string;
    id?: number;
    login?: string;
    url?: string;
  };
}[];
export interface PullsComment {
  _links?: {
    html?: {
      href?: string;
    };
    pull_request?: {
      href?: string;
    };
    self?: {
      href?: string;
    };
  };
  body?: string;
  commit_id?: string;
  /** ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ */
  created_at?: string;
  id?: number;
  path?: string;
  position?: number;
  /** ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ */
  updated_at?: string;
  url?: string;
  user?: {
    avatar_url?: string;
    gravatar_id?: string;
    id?: number;
    login?: string;
    url?: string;
  };
}
export interface PullsCommentPost {
  body?: string;
  commit_id?: string;
  path?: string;
  position?: number;
}
export declare type PullsComments = {
  _links?: {
    html?: {
      href?: string;
    };
    pull_request?: {
      href?: string;
    };
    self?: {
      href?: string;
    };
  };
  body?: string;
  commit_id?: string;
  created_at?: string;
  id?: number;
  path?: string;
  position?: number;
  updated_at?: string;
  url?: string;
  user?: {
    avatar_url?: string;
    gravatar_id?: string;
    id?: number;
    login?: string;
    url?: string;
  };
}[];
export interface PullsPost {
  base?: string;
  body?: string;
  head?: string;
  title?: string;
}
export interface PutSubscription {
  created_at?: string;
  ignored?: boolean;
  reason?: object;
  subscribed?: boolean;
  thread_url?: string;
  url?: string;
}
export interface RateLimit {
  rate?: {
    limit?: number;
    remaining?: number;
    reset?: number;
  };
}
export declare type Ref = {
  created_at?: string;
  creator?: {
    avatar_url?: string;
    gravatar_id?: string;
    id?: number;
    login?: string;
    url?: string;
  };
  description?: string;
  id?: number;
  state?: string;
  target_url?: string;
  updated_at?: string;
  url?: string;
}[];
export declare type RefStatus = {
  commit_url?: string;
  name?: string;
  repository_url?: string;
  sha?: string;
  state?: string;
  statuses?: {
    context?: string;
    created_at?: string;
    description?: string;
    id?: number;
    state?: string;
    target_url?: string;
    updated_at?: string;
    url?: string;
  }[];
}[];
export declare type Refs = {
  object?: {
    sha?: string;
    type?: string;
    url?: string;
  };
  ref?: string;
  url?: string;
}[];
export interface RefsBody {
  ref?: string;
  sha?: string;
}
export interface Release {
  assets?: {
    content_type?: string;
    created_at?: string;
    download_count?: number;
    id?: number;
    label?: string;
    name?: string;
    size?: number;
    state?: string;
    updated_at?: string;
    uploader?: User;
    url?: string;
  }[];
  assets_url?: string;
  author?: User;
  body?: string;
  created_at?: string;
  draft?: boolean;
  html_url?: string;
  id?: number;
  name?: string;
  prerelease?: boolean;
  published_at?: string;
  tag_name?: string;
  tarball_url?: string;
  target_commitish?: string;
  upload_url?: string;
  url?: string;
  zipball_url?: string;
}
export interface ReleaseCreate {
  body?: string;
  draft?: boolean;
  name?: string;
  prerelease?: boolean;
  tag_name?: string;
  target_commitish?: string;
}
export declare type Releases = {
  assets?: {
    content_type?: string;
    created_at?: string;
    download_count?: number;
    id?: number;
    label?: string;
    name?: string;
    size?: number;
    state?: string;
    updated_at?: string;
    uploader?: User;
    url?: string;
  }[];
  assets_url?: string;
  author?: User;
  body?: string;
  created_at?: string;
  draft?: boolean;
  html_url?: string;
  id?: number;
  name?: string;
  prerelease?: boolean;
  published_at?: string;
  tag_name?: string;
  tarball_url?: string;
  target_commitish?: string;
  upload_url?: string;
  url?: string;
  zipball_url?: string;
}[];
export interface Repo {
  clone_url?: string;
  /** ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ */
  created_at?: string;
  description?: string;
  fork?: boolean;
  forks?: number;
  forks_count?: number;
  full_name?: string;
  git_url?: string;
  has_downloads?: boolean;
  has_issues?: boolean;
  has_wiki?: boolean;
  homepage?: string;
  html_url?: string;
  id?: number;
  language?: string;
  master_branch?: string;
  mirror_url?: string;
  name?: string;
  open_issues?: number;
  open_issues_count?: number;
  organization?: Organization;
  owner?: Actor;
  parent?: Repo & any;
  private?: boolean;
  /** ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ */
  pushed_at?: string;
  size?: number;
  source?: Repo & any;
  ssh_url?: string;
  svn_url?: string;
  /** ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ */
  updated_at?: string;
  url?: string;
  watchers?: number;
  watchers_count?: number;
}
export declare type RepoDeployments = {
  created_at?: string;
  creator?: User;
  description?: string;
  id?: number;
  payload?: string;
  sha?: string;
  statuses_url?: string;
  updated_at?: string;
  url?: string;
}[];
export declare type RepoComments = {
  body?: string;
  commit_id?: string;
  created_at?: string;
  html_url?: string;
  id?: number;
  line?: number;
  path?: string;
  position?: number;
  updated_at?: string;
  url?: string;
  user?: User;
}[];
export interface RepoCommit {
  author?: {
    date?: string;
    email?: string;
    name?: string;
  };
  committer?: {
    date?: string;
    email?: string;
    name?: string;
  };
  message?: string;
  parents?: {
    sha?: string;
    url?: string;
  }[];
  sha?: string;
  tree?: {
    sha?: string;
    url?: string;
  };
  url?: string;
}
export interface RepoCommitBody {
  author?: {
    date?: string;
    email?: string;
    name?: string;
  };
  message: string;
  parents: string[];
  tree: string;
}
export interface RepoEdit {
  description?: string;
  has_downloads?: boolean;
  has_issues?: boolean;
  has_wiki?: boolean;
  homepage?: string;
  name?: string;
  private?: boolean;
}
export declare type Repos = Repo[];
export interface SearchCode {
  items?: {
    git_url?: string;
    html_url?: string;
    name?: string;
    path?: string;
    repository?: {
      archive_url?: string;
      assignees_url?: string;
      blobs_url?: string;
      branches_url?: string;
      collaborators_url?: string;
      comments_url?: string;
      commits_url?: string;
      compare_url?: string;
      contents_url?: string;
      contributors_url?: string;
      description?: string;
      downloads_url?: string;
      events_url?: string;
      fork?: boolean;
      forks_url?: string;
      full_name?: string;
      git_commits_url?: string;
      git_refs_url?: string;
      git_tags_url?: string;
      hooks_url?: string;
      html_url?: string;
      id?: number;
      issue_comment_url?: string;
      issue_events_url?: string;
      issues_url?: string;
      keys_url?: string;
      labels_url?: string;
      languages_url?: string;
      merges_url?: string;
      milestones_url?: string;
      name?: string;
      notifications_url?: string;
      owner?: Actor;
      private?: boolean;
      pulls_url?: string;
      stargazers_url?: string;
      statuses_url?: string;
      subscribers_url?: string;
      subscription_url?: string;
      tags_url?: string;
      teams_url?: string;
      trees_url?: string;
      url?: string;
    };
    score?: number;
    sha?: string;
    url?: string;
  }[];
  total_count?: number;
}
export interface SearchIssues {
  items?: {
    assignee?: any;
    body?: string;
    closed_at?: any;
    comments?: number;
    comments_url?: string;
    created_at?: string;
    events_url?: string;
    html_url?: string;
    id?: number;
    labels?: {
      color?: string;
      name?: string;
      url?: string;
    }[];
    labels_url?: string;
    milestone?: any;
    number?: number;
    pull_request?: {
      diff_url?: any;
      html_url?: any;
      patch_url?: any;
    };
    score?: number;
    state?: string;
    title?: string;
    updated_at?: string;
    url?: string;
    user?: User;
  }[];
  total_count?: number;
}
export interface SearchIssuesByKeyword {
  issues?: {
    body?: string;
    comments?: number;
    created_at?: string;
    gravatar_id?: string;
    html_url?: string;
    labels?: string[];
    number?: number;
    position?: number;
    state?: string;
    title?: string;
    updated_at?: string;
    user?: string;
    votes?: number;
  }[];
}
export interface SearchRepositories {
  items?: Repo[];
  total_count?: number;
}
export interface SearchRepositoriesByKeyword {
  repositories?: Repo[];
}
export interface SearchUserByEmail {
  user?: User;
}
export interface SearchUsers {
  items?: Users;
  total_count?: number;
}
export interface SearchUsersByKeyword {
  users?: Users;
}
export interface Subscription {
  /** ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ */
  created_at?: string;
  ignored?: boolean;
  reason?: string;
  repository_url?: string;
  subscribed?: boolean;
  thread_url?: string;
  url?: string;
}
export interface SubscriptionBody {
  ignored?: boolean;
  subscribed?: boolean;
}
export interface Tag {
  /** String of the tag message. */
  message?: string;
  object?: {
    sha?: string;
    type?: "commit" | "tree" | "blob";
    url?: string;
  };
  sha?: string;
  /** The tag's name. This is typically a version (e.g., "v0.0.1"). */
  tag?: string;
  tagger?: {
    date?: string;
    email?: string;
    name?: string;
  };
  url?: string;
}
export interface TagBody {
  /** String of the tag message. */
  message: string;
  /** String of the SHA of the git object this is tagging. */
  object: string;
  /** The tag's name. This is typically a version (e.g., "v0.0.1"). */
  tag: string;
  tagger: {
    date?: string;
    email?: string;
    name?: string;
  };
  /** String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob. */
  type: "commit" | "tree" | "blob";
}
export declare type Tags = Tag[];
export interface Team {
  id?: number;
  members_count?: number;
  name?: string;
  permission?: string;
  repos_count?: number;
  url?: string;
}
export interface TeamMembership {
  state?: string;
  url?: string;
}
export declare type TeamRepos = Repos;
export declare type Teams = {
  id?: number;
  name?: string;
  url?: string;
}[];
export declare type TeamsList = {
  id?: number;
  members_count?: number;
  name?: string;
  organization?: {
    avatar_url?: string;
    id?: number;
    login?: string;
    url?: string;
  };
  permission?: string;
  repos_count?: number;
  url?: string;
}[];
export interface Tree {
  sha?: string;
  tree?: {
    mode?: "100644" | "100755" | "040000" | "160000" | "120000";
    path?: string;
    sha?: string;
    size?: number;
    type?: "blob" | "tree" | "commit";
    url?: string;
  }[];
  url?: string;
}
export interface Trees {
  base_tree?: string;
  /** SHA1 checksum ID of the object in the tree. */
  sha?: string;
  tree?: Tree[];
  url?: string;
}
export declare type User = Actor & any;
export declare type UserEmails = string[];
export interface UserKeysKeyId {
  id?: number;
  key?: string;
  title?: string;
  url?: string;
}
export interface UserKeysPost {
  key?: string;
  title?: string;
}
export interface UserUpdate {
  bio?: string;
  blog?: string;
  company?: string;
  email?: string;
  hireable?: boolean;
  location?: string;
  name?: string;
}
export declare type Users = User[];
export declare type RequestParams = Omit<RequestInit, "body" | "method"> & {
  secure?: boolean;
};
export declare type RequestQueryParamsType = Record<string | number, any>;
interface ApiConfig<SecurityDataType> {
  baseUrl?: string;
  baseApiParams?: RequestParams;
  securityWorker?: (securityData: SecurityDataType) => RequestParams;
}
interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D | null;
  error: E | null;
}
declare enum BodyType {
  Json = 0,
}
declare class HttpClient<SecurityDataType> {
  baseUrl: string;
  private securityData;
  private securityWorker;
  private baseApiParams;
  constructor(apiConfig?: ApiConfig<SecurityDataType>);
  setSecurityData: (data: SecurityDataType) => void;
  private addQueryParam;
  protected addQueryParams(rawQuery?: RequestQueryParamsType): string;
  private bodyFormatters;
  private mergeRequestOptions;
  private safeParseResponse;
  request: <T = any, E = any>(
    path: string,
    method: string,
    { secure, ...params }?: RequestParams,
    body?: any,
    bodyType?: BodyType,
    secureByDefault?: boolean,
  ) => Promise<HttpResponse<T, unknown>>;
}
/**
 * @title GitHub
 * @version v3
 * @baseUrl https://api.github.com/
 * Powerful collaboration, code review, and code management for open source and private projects.
 */
export declare class Api<SecurityDataType = any> extends HttpClient<SecurityDataType> {
  emojis: {
    /**
     * @name emojisList
     * @request GET:/emojis
     * @description Lists all the emojis available to use on GitHub.
     */
    emojisList: (params?: RequestParams) => Promise<HttpResponse<Record<string, string>, unknown>>;
  };
  events: {
    /**
     * @name eventsList
     * @request GET:/events
     * @description List public events.
     */
    eventsList: (params?: RequestParams) => Promise<HttpResponse<Events, unknown>>;
  };
  feeds: {
    /**
     * @name feedsList
     * @request GET:/feeds
     * @description List Feeds. GitHub provides several timeline resources in Atom format. The Feeds API lists all the feeds available to the authenticating user.
     */
    feedsList: (params?: RequestParams) => Promise<HttpResponse<Feeds, unknown>>;
  };
  gists: {
    /**
     * @name gistsList
     * @request GET:/gists
     * @description List the authenticated user's gists or if called anonymously, this will return all public gists.
     */
    gistsList: (
      query?: {
        since?: string;
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<Gists, unknown>>;
    /**
     * @name gistsCreate
     * @request POST:/gists
     * @description Create a gist.
     */
    gistsCreate: (body: PostGist, params?: RequestParams) => Promise<HttpResponse<Gist, unknown>>;
    /**
     * @name publicList
     * @request GET:/gists/public
     * @description List all public gists.
     */
    publicList: (
      query?: {
        since?: string;
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<Gists, unknown>>;
    /**
     * @name starredList
     * @request GET:/gists/starred
     * @description List the authenticated user's starred gists.
     */
    starredList: (
      query?: {
        since?: string;
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<Gists, unknown>>;
    /**
     * @name gistsDelete
     * @request DELETE:/gists/{id}
     * @description Delete a gist.
     */
    gistsDelete: (id: number, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name gistsDetail
     * @request GET:/gists/{id}
     * @description Get a single gist.
     */
    gistsDetail: (id: number, params?: RequestParams) => Promise<HttpResponse<Gist, unknown>>;
    /**
     * @name gistsPartialUpdate
     * @request PATCH:/gists/{id}
     * @description Edit a gist.
     */
    gistsPartialUpdate: (id: number, body: PatchGist, params?: RequestParams) => Promise<HttpResponse<Gist, unknown>>;
    /**
     * @name commentsDetail
     * @request GET:/gists/{id}/comments
     * @description List comments on a gist.
     */
    commentsDetail: (id: number, params?: RequestParams) => Promise<HttpResponse<Comments, unknown>>;
    /**
     * @name commentsCreate
     * @request POST:/gists/{id}/comments
     * @description Create a commen
     */
    commentsCreate: (id: number, body: CommentBody, params?: RequestParams) => Promise<HttpResponse<Comment, unknown>>;
    /**
     * @name commentsDelete
     * @request DELETE:/gists/{id}/comments/{commentId}
     * @description Delete a comment.
     */
    commentsDelete: (id: number, commentId: number, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name commentsDetail
     * @request GET:/gists/{id}/comments/{commentId}
     * @description Get a single comment.
     * @originalName commentsDetail
     * @duplicate
     */
    commentsDetail2: (id: number, commentId: number, params?: RequestParams) => Promise<HttpResponse<Comment, unknown>>;
    /**
     * @name commentsPartialUpdate
     * @request PATCH:/gists/{id}/comments/{commentId}
     * @description Edit a comment.
     */
    commentsPartialUpdate: (
      id: number,
      commentId: number,
      body: Comment,
      params?: RequestParams,
    ) => Promise<HttpResponse<Comment, unknown>>;
    /**
     * @name forksCreate
     * @request POST:/gists/{id}/forks
     * @description Fork a gist.
     */
    forksCreate: (id: number, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name starDelete
     * @request DELETE:/gists/{id}/star
     * @description Unstar a gist.
     */
    starDelete: (id: number, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name starDetail
     * @request GET:/gists/{id}/star
     * @description Check if a gist is starred.
     */
    starDetail: (id: number, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name starUpdate
     * @request PUT:/gists/{id}/star
     * @description Star a gist.
     */
    starUpdate: (id: number, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
  };
  gitignore: {
    /**
     * @name templatesList
     * @request GET:/gitignore/templates
     * @description Listing available templates. List all templates available to pass as an option when creating a repository.
     */
    templatesList: (params?: RequestParams) => Promise<HttpResponse<Gitignore, unknown>>;
    /**
     * @name templatesDetail
     * @request GET:/gitignore/templates/{language}
     * @description Get a single template.
     */
    templatesDetail: (language: string, params?: RequestParams) => Promise<HttpResponse<GitignoreLang, unknown>>;
  };
  issues: {
    /**
     * @name issuesList
     * @request GET:/issues
     * @description List issues. List all issues across all the authenticated user's visible repositories.
     */
    issuesList: (
      query: {
        filter: "assigned" | "created" | "mentioned" | "subscribed" | "all";
        state: "open" | "closed";
        labels: string;
        sort: "created" | "updated" | "comments";
        direction: "asc" | "desc";
        since?: string;
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<Issues, unknown>>;
  };
  legacy: {
    /**
     * @name issuesSearchDetail
     * @request GET:/legacy/issues/search/{owner}/{repository}/{state}/{keyword}
     * @description Find issues by state and keyword.
     */
    issuesSearchDetail: (
      keyword: string,
      state: "open" | "closed",
      owner: string,
      repository: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<SearchIssuesByKeyword, unknown>>;
    /**
     * @name reposSearchDetail
     * @request GET:/legacy/repos/search/{keyword}
     * @description Find repositories by keyword. Note, this legacy method does not follow the v3 pagination pattern. This method returns up to 100 results per page and pages can be fetched using the start_page parameter.
     */
    reposSearchDetail: (
      keyword: string,
      query?: {
        order?: "desc" | "asc";
        language?: string;
        start_page?: string;
        sort?: "updated" | "stars" | "forks";
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<SearchRepositoriesByKeyword, unknown>>;
    /**
     * @name userEmailDetail
     * @request GET:/legacy/user/email/{email}
     * @description This API call is added for compatibility reasons only.
     */
    userEmailDetail: (email: string, params?: RequestParams) => Promise<HttpResponse<SearchUserByEmail, unknown>>;
    /**
     * @name userSearchDetail
     * @request GET:/legacy/user/search/{keyword}
     * @description Find users by keyword.
     */
    userSearchDetail: (
      keyword: string,
      query?: {
        order?: "desc" | "asc";
        start_page?: string;
        sort?: "updated" | "stars" | "forks";
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<SearchUsersByKeyword, unknown>>;
  };
  markdown: {
    /**
     * @name markdownCreate
     * @request POST:/markdown
     * @description Render an arbitrary Markdown document
     */
    markdownCreate: (body: Markdown, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name postMarkdown
     * @request POST:/markdown/raw
     * @description Render a Markdown document in raw mode
     */
    postMarkdown: (params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
  };
  meta: {
    /**
     * @name metaList
     * @request GET:/meta
     * @description This gives some information about GitHub.com, the service.
     */
    metaList: (params?: RequestParams) => Promise<HttpResponse<Meta, unknown>>;
  };
  networks: {
    /**
     * @name eventsDetail
     * @request GET:/networks/{owner}/{repo}/events
     * @description List public events for a network of repositories.
     */
    eventsDetail: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<Events, unknown>>;
  };
  notifications: {
    /**
     * @name notificationsList
     * @request GET:/notifications
     * @description List your notifications. List all notifications for the current user, grouped by repository.
     */
    notificationsList: (
      query?: {
        all?: boolean;
        participating?: boolean;
        since?: string;
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<Notifications, unknown>>;
    /**
     * @name notificationsUpdate
     * @request PUT:/notifications
     * @description Mark as read. Marking a notification as "read" removes it from the default view on GitHub.com.
     */
    notificationsUpdate: (body: NotificationMarkRead, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name threadsDetail
     * @request GET:/notifications/threads/{id}
     * @description View a single thread.
     */
    threadsDetail: (id: number, params?: RequestParams) => Promise<HttpResponse<Notifications, unknown>>;
    /**
     * @name threadsPartialUpdate
     * @request PATCH:/notifications/threads/{id}
     * @description Mark a thread as read
     */
    threadsPartialUpdate: (id: number, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name threadsSubscriptionDelete
     * @request DELETE:/notifications/threads/{id}/subscription
     * @description Delete a Thread Subscription.
     */
    threadsSubscriptionDelete: (id: number, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name threadsSubscriptionDetail
     * @request GET:/notifications/threads/{id}/subscription
     * @description Get a Thread Subscription.
     */
    threadsSubscriptionDetail: (id: number, params?: RequestParams) => Promise<HttpResponse<Subscription, unknown>>;
    /**
     * @name threadsSubscriptionUpdate
     * @request PUT:/notifications/threads/{id}/subscription
     * @description Set a Thread Subscription. This lets you subscribe to a thread, or ignore it. Subscribing to a thread is unnecessary if the user is already subscribed to the repository. Ignoring a thread will mute all future notifications (until you comment or get @mentioned).
     */
    threadsSubscriptionUpdate: (
      id: number,
      body: PutSubscription,
      params?: RequestParams,
    ) => Promise<HttpResponse<Subscription, unknown>>;
  };
  orgs: {
    /**
     * @name orgsDetail
     * @request GET:/orgs/{org}
     * @description Get an Organization.
     */
    orgsDetail: (org: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name orgsPartialUpdate
     * @request PATCH:/orgs/{org}
     * @description Edit an Organization.
     */
    orgsPartialUpdate: (org: string, body: PatchOrg, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name eventsDetail
     * @request GET:/orgs/{org}/events
     * @description List public events for an organization.
     */
    eventsDetail: (org: string, params?: RequestParams) => Promise<HttpResponse<Events, unknown>>;
    /**
     * @name issuesDetail
     * @request GET:/orgs/{org}/issues
     * @description List issues. List all issues for a given organization for the authenticated user.
     */
    issuesDetail: (
      org: string,
      query: {
        filter: "assigned" | "created" | "mentioned" | "subscribed" | "all";
        state: "open" | "closed";
        labels: string;
        sort: "created" | "updated" | "comments";
        direction: "asc" | "desc";
        since?: string;
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<Issues, unknown>>;
    /**
     * @name membersDetail
     * @request GET:/orgs/{org}/members
     * @description Members list. List all users who are members of an organization. A member is a user tha belongs to at least 1 team in the organization. If the authenticated user is also an owner of this organization then both concealed and public members will be returned. If the requester is not an owner of the organization the query will be redirected to the public members list.
     */
    membersDetail: (org: string, params?: RequestParams) => Promise<HttpResponse<Users, unknown>>;
    /**
     * @name membersDelete
     * @request DELETE:/orgs/{org}/members/{username}
     * @description Remove a member. Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.
     */
    membersDelete: (org: string, username: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name membersDetail
     * @request GET:/orgs/{org}/members/{username}
     * @description Check if a user is, publicly or privately, a member of the organization.
     * @originalName membersDetail
     * @duplicate
     */
    membersDetail2: (org: string, username: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name publicMembersDetail
     * @request GET:/orgs/{org}/public_members
     * @description Public members list. Members of an organization can choose to have their membership publicized or not.
     */
    publicMembersDetail: (org: string, params?: RequestParams) => Promise<HttpResponse<Users, unknown>>;
    /**
     * @name publicMembersDelete
     * @request DELETE:/orgs/{org}/public_members/{username}
     * @description Conceal a user's membership.
     */
    publicMembersDelete: (org: string, username: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name publicMembersDetail
     * @request GET:/orgs/{org}/public_members/{username}
     * @description Check public membership.
     * @originalName publicMembersDetail
     * @duplicate
     */
    publicMembersDetail2: (
      org: string,
      username: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name publicMembersUpdate
     * @request PUT:/orgs/{org}/public_members/{username}
     * @description Publicize a user's membership.
     */
    publicMembersUpdate: (org: string, username: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name reposDetail
     * @request GET:/orgs/{org}/repos
     * @description List repositories for the specified org.
     */
    reposDetail: (
      org: string,
      query?: {
        type?: "all" | "public" | "private" | "forks" | "sources" | "member";
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<Repos, unknown>>;
    /**
     * @name reposCreate
     * @request POST:/orgs/{org}/repos
     * @description Create a new repository for the authenticated user. OAuth users must supply repo scope.
     */
    reposCreate: (org: string, body: PostRepo, params?: RequestParams) => Promise<HttpResponse<Repos, unknown>>;
    /**
     * @name teamsDetail
     * @request GET:/orgs/{org}/teams
     * @description List teams.
     */
    teamsDetail: (org: string, params?: RequestParams) => Promise<HttpResponse<Teams, unknown>>;
    /**
     * @name teamsCreate
     * @request POST:/orgs/{org}/teams
     * @description Create team. In order to create a team, the authenticated user must be an owner of organization.
     */
    teamsCreate: (org: string, body: OrgTeamsPost, params?: RequestParams) => Promise<HttpResponse<Team, unknown>>;
  };
  rateLimit: {
    /**
     * @name rateLimitList
     * @request GET:/rate_limit
     * @description Get your current rate limit status Note: Accessing this endpoint does not count against your rate limit.
     */
    rateLimitList: (params?: RequestParams) => Promise<HttpResponse<RateLimit, unknown>>;
  };
  repos: {
    /**
     * @name reposDelete
     * @request DELETE:/repos/{owner}/{repo}
     * @description Delete a Repository. Deleting a repository requires admin access. If OAuth is used, the delete_repo scope is required.
     */
    reposDelete: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name reposDetail
     * @request GET:/repos/{owner}/{repo}
     * @description Get repository.
     */
    reposDetail: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<Repo, unknown>>;
    /**
     * @name reposPartialUpdate
     * @request PATCH:/repos/{owner}/{repo}
     * @description Edit repository.
     */
    reposPartialUpdate: (
      owner: string,
      repo: string,
      body: RepoEdit,
      params?: RequestParams,
    ) => Promise<HttpResponse<Repo, unknown>>;
    /**
     * @name assigneesDetail
     * @request GET:/repos/{owner}/{repo}/assignees
     * @description List assignees. This call lists all the available assignees (owner + collaborators) to which issues may be assigned.
     */
    assigneesDetail: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<Assignees, unknown>>;
    /**
     * @name assigneesDetail
     * @request GET:/repos/{owner}/{repo}/assignees/{assignee}
     * @description Check assignee. You may also check to see if a particular user is an assignee for a repository.
     * @originalName assigneesDetail
     * @duplicate
     */
    assigneesDetail2: (
      owner: string,
      repo: string,
      assignee: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name branchesDetail
     * @request GET:/repos/{owner}/{repo}/branches
     * @description Get list of branches
     */
    branchesDetail: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<Branches, unknown>>;
    /**
     * @name branchesDetail
     * @request GET:/repos/{owner}/{repo}/branches/{branch}
     * @description Get Branch
     * @originalName branchesDetail
     * @duplicate
     */
    branchesDetail2: (
      owner: string,
      repo: string,
      branch: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<Branch, unknown>>;
    /**
     * @name collaboratorsDetail
     * @request GET:/repos/{owner}/{repo}/collaborators
     * @description List. When authenticating as an organization owner of an organization-owned repository, all organization owners are included in the list of collaborators. Otherwise, only users with access to the repository are returned in the collaborators list.
     */
    collaboratorsDetail: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<Users, unknown>>;
    /**
     * @name collaboratorsDelete
     * @request DELETE:/repos/{owner}/{repo}/collaborators/{user}
     * @description Remove collaborator.
     */
    collaboratorsDelete: (
      owner: string,
      repo: string,
      user: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name collaboratorsDetail
     * @request GET:/repos/{owner}/{repo}/collaborators/{user}
     * @description Check if user is a collaborator
     * @originalName collaboratorsDetail
     * @duplicate
     */
    collaboratorsDetail2: (
      owner: string,
      repo: string,
      user: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name collaboratorsUpdate
     * @request PUT:/repos/{owner}/{repo}/collaborators/{user}
     * @description Add collaborator.
     */
    collaboratorsUpdate: (
      owner: string,
      repo: string,
      user: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name commentsDetail
     * @request GET:/repos/{owner}/{repo}/comments
     * @description List commit comments for a repository. Comments are ordered by ascending ID.
     */
    commentsDetail: (
      owner: string,
      repo: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<RepoComments, unknown>>;
    /**
     * @name commentsDelete
     * @request DELETE:/repos/{owner}/{repo}/comments/{commentId}
     * @description Delete a commit comment
     */
    commentsDelete: (
      owner: string,
      repo: string,
      commentId: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name commentsDetail
     * @request GET:/repos/{owner}/{repo}/comments/{commentId}
     * @description Get a single commit comment.
     * @originalName commentsDetail
     * @duplicate
     */
    commentsDetail2: (
      owner: string,
      repo: string,
      commentId: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<CommitComment, unknown>>;
    /**
     * @name commentsPartialUpdate
     * @request PATCH:/repos/{owner}/{repo}/comments/{commentId}
     * @description Update a commit comment.
     */
    commentsPartialUpdate: (
      owner: string,
      repo: string,
      commentId: number,
      body: CommentBody,
      params?: RequestParams,
    ) => Promise<HttpResponse<CommitComment, unknown>>;
    /**
     * @name commitsDetail
     * @request GET:/repos/{owner}/{repo}/commits
     * @description List commits on a repository.
     */
    commitsDetail: (
      owner: string,
      repo: string,
      query?: {
        since?: string;
        sha?: string;
        path?: string;
        author?: string;
        until?: string;
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<Commits, unknown>>;
    /**
     * @name commitsStatusDetail
     * @request GET:/repos/{owner}/{repo}/commits/{ref}/status
     * @description Get the combined Status for a specific Ref The Combined status endpoint is currently available for developers to preview. During the preview period, the API may change without advance notice. Please see the blog post for full details. To access this endpoint during the preview period, you must provide a custom media type in the Accept header: application/vnd.github.she-hulk-preview+json
     */
    commitsStatusDetail: (
      owner: string,
      repo: string,
      ref: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<RefStatus, unknown>>;
    /**
     * @name commitsDetail
     * @request GET:/repos/{owner}/{repo}/commits/{shaCode}
     * @description Get a single commit.
     * @originalName commitsDetail
     * @duplicate
     */
    commitsDetail2: (
      owner: string,
      repo: string,
      shaCode: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<Commit, unknown>>;
    /**
     * @name commitsCommentsDetail
     * @request GET:/repos/{owner}/{repo}/commits/{shaCode}/comments
     * @description List comments for a single commitList comments for a single commit.
     */
    commitsCommentsDetail: (
      owner: string,
      repo: string,
      shaCode: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<RepoComments, unknown>>;
    /**
     * @name commitsCommentsCreate
     * @request POST:/repos/{owner}/{repo}/commits/{shaCode}/comments
     * @description Create a commit comment.
     */
    commitsCommentsCreate: (
      owner: string,
      repo: string,
      shaCode: string,
      body: CommitCommentBody,
      params?: RequestParams,
    ) => Promise<HttpResponse<CommitComment, unknown>>;
    /**
     * @name compareDetail
     * @request GET:/repos/{owner}/{repo}/compare/{baseId}...{headId}
     * @description Compare two commits
     */
    compareDetail: (
      owner: string,
      repo: string,
      baseId: string,
      headId: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<CompareCommits, unknown>>;
    /**
     * @name contentsDelete
     * @request DELETE:/repos/{owner}/{repo}/contents/{path}
     * @description Delete a file. This method deletes a file in a repository.
     */
    contentsDelete: (
      owner: string,
      repo: string,
      path: string,
      body: DeleteFileBody,
      params?: RequestParams,
    ) => Promise<HttpResponse<DeleteFile, unknown>>;
    /**
     * @name contentsDetail
     * @request GET:/repos/{owner}/{repo}/contents/{path}
     * @description Get contents. This method returns the contents of a file or directory in a repository. Files and symlinks support a custom media type for getting the raw content. Directories and submodules do not support custom media types. Note: This API supports files up to 1 megabyte in size. Here can be many outcomes. For details see "http://developer.github.com/v3/repos/contents/"
     */
    contentsDetail: (
      owner: string,
      repo: string,
      path: string,
      query?: {
        path?: string;
        ref?: string;
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<ContentsPath, unknown>>;
    /**
     * @name contentsUpdate
     * @request PUT:/repos/{owner}/{repo}/contents/{path}
     * @description Create a file.
     */
    contentsUpdate: (
      owner: string,
      repo: string,
      path: string,
      body: CreateFileBody,
      params?: RequestParams,
    ) => Promise<HttpResponse<CreateFile, unknown>>;
    /**
     * @name contributorsDetail
     * @request GET:/repos/{owner}/{repo}/contributors
     * @description Get list of contributors.
     */
    contributorsDetail: (
      owner: string,
      repo: string,
      query: {
        anon: string;
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<Users, unknown>>;
    /**
     * @name deploymentsDetail
     * @request GET:/repos/{owner}/{repo}/deployments
     * @description Users with pull access can view deployments for a repository
     */
    deploymentsDetail: (
      owner: string,
      repo: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<RepoDeployments, unknown>>;
    /**
     * @name deploymentsCreate
     * @request POST:/repos/{owner}/{repo}/deployments
     * @description Users with push access can create a deployment for a given ref
     */
    deploymentsCreate: (
      owner: string,
      repo: string,
      body: Deployment,
      params?: RequestParams,
    ) => Promise<HttpResponse<DeploymentResp, unknown>>;
    /**
     * @name deploymentsStatusesDetail
     * @request GET:/repos/{owner}/{repo}/deployments/{id}/statuses
     * @description Users with pull access can view deployment statuses for a deployment
     */
    deploymentsStatusesDetail: (
      owner: string,
      repo: string,
      id: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<DeploymentStatuses, unknown>>;
    /**
     * @name deploymentsStatusesCreate
     * @request POST:/repos/{owner}/{repo}/deployments/{id}/statuses
     * @description Create a Deployment Status Users with push access can create deployment statuses for a given deployment:
     */
    deploymentsStatusesCreate: (
      owner: string,
      repo: string,
      id: number,
      body: DeploymentStatusesCreate,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name downloadsDetail
     * @request GET:/repos/{owner}/{repo}/downloads
     * @description Deprecated. List downloads for a repository.
     */
    downloadsDetail: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<Downloads, unknown>>;
    /**
     * @name downloadsDelete
     * @request DELETE:/repos/{owner}/{repo}/downloads/{downloadId}
     * @description Deprecated. Delete a download.
     */
    downloadsDelete: (
      owner: string,
      repo: string,
      downloadId: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name downloadsDetail
     * @request GET:/repos/{owner}/{repo}/downloads/{downloadId}
     * @description Deprecated. Get a single download.
     * @originalName downloadsDetail
     * @duplicate
     */
    downloadsDetail2: (
      owner: string,
      repo: string,
      downloadId: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<Download, unknown>>;
    /**
     * @name eventsDetail
     * @request GET:/repos/{owner}/{repo}/events
     * @description Get list of repository events.
     */
    eventsDetail: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<Events, unknown>>;
    /**
     * @name forksDetail
     * @request GET:/repos/{owner}/{repo}/forks
     * @description List forks.
     */
    forksDetail: (
      owner: string,
      repo: string,
      query?: {
        sort?: "newes" | "oldes" | "watchers";
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<Repos, unknown>>;
    /**
     * @name forksCreate
     * @request POST:/repos/{owner}/{repo}/forks
     * @description Create a fork. Forking a Repository happens asynchronously. Therefore, you may have to wai a short period before accessing the git objects. If this takes longer than 5 minutes, be sure to contact Support.
     */
    forksCreate: (
      owner: string,
      repo: string,
      body: ForkBody,
      params?: RequestParams,
    ) => Promise<HttpResponse<Repo, unknown>>;
    /**
     * @name gitBlobsCreate
     * @request POST:/repos/{owner}/{repo}/git/blobs
     * @description Create a Blob.
     */
    gitBlobsCreate: (
      owner: string,
      repo: string,
      body: Blob,
      params?: RequestParams,
    ) => Promise<HttpResponse<Blobs, unknown>>;
    /**
     * @name gitBlobsDetail
     * @request GET:/repos/{owner}/{repo}/git/blobs/{shaCode}
     * @description Get a Blob. Since blobs can be any arbitrary binary data, the input and responses for the blob API takes an encoding parameter that can be either utf-8 or base64. If your data cannot be losslessly sent as a UTF-8 string, you can base64 encode it.
     */
    gitBlobsDetail: (
      owner: string,
      repo: string,
      shaCode: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<Blob, unknown>>;
    /**
     * @name gitCommitsCreate
     * @request POST:/repos/{owner}/{repo}/git/commits
     * @description Create a Commit.
     */
    gitCommitsCreate: (
      owner: string,
      repo: string,
      body: RepoCommitBody,
      params?: RequestParams,
    ) => Promise<HttpResponse<GitCommit, unknown>>;
    /**
     * @name gitCommitsDetail
     * @request GET:/repos/{owner}/{repo}/git/commits/{shaCode}
     * @description Get a Commit.
     */
    gitCommitsDetail: (
      owner: string,
      repo: string,
      shaCode: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<RepoCommit, unknown>>;
    /**
     * @name gitRefsDetail
     * @request GET:/repos/{owner}/{repo}/git/refs
     * @description Get all References
     */
    gitRefsDetail: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<Refs, unknown>>;
    /**
     * @name gitRefsCreate
     * @request POST:/repos/{owner}/{repo}/git/refs
     * @description Create a Reference
     */
    gitRefsCreate: (
      owner: string,
      repo: string,
      body: RefsBody,
      params?: RequestParams,
    ) => Promise<HttpResponse<HeadBranch, unknown>>;
    /**
     * @name gitRefsDelete
     * @request DELETE:/repos/{owner}/{repo}/git/refs/{ref}
     * @description Delete a Reference Example: Deleting a branch: DELETE /repos/octocat/Hello-World/git/refs/heads/feature-a Example: Deleting a tag:        DELETE /repos/octocat/Hello-World/git/refs/tags/v1.0
     */
    gitRefsDelete: (
      owner: string,
      repo: string,
      ref: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name gitRefsDetail
     * @request GET:/repos/{owner}/{repo}/git/refs/{ref}
     * @description Get a Reference
     * @originalName gitRefsDetail
     * @duplicate
     */
    gitRefsDetail2: (
      owner: string,
      repo: string,
      ref: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<HeadBranch, unknown>>;
    /**
     * @name gitRefsPartialUpdate
     * @request PATCH:/repos/{owner}/{repo}/git/refs/{ref}
     * @description Update a Reference
     */
    gitRefsPartialUpdate: (
      owner: string,
      repo: string,
      ref: string,
      body: GitRefPatch,
      params?: RequestParams,
    ) => Promise<HttpResponse<HeadBranch, unknown>>;
    /**
     * @name gitTagsCreate
     * @request POST:/repos/{owner}/{repo}/git/tags
     * @description Create a Tag Object. Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then create the refs/tags/[tag] reference. If you want to create a lightweight tag, you only have to create the tag reference - this call would be unnecessary.
     */
    gitTagsCreate: (
      owner: string,
      repo: string,
      body: TagBody,
      params?: RequestParams,
    ) => Promise<HttpResponse<Tag, unknown>>;
    /**
     * @name gitTagsDetail
     * @request GET:/repos/{owner}/{repo}/git/tags/{shaCode}
     * @description Get a Tag.
     */
    gitTagsDetail: (
      owner: string,
      repo: string,
      shaCode: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<Tag, unknown>>;
    /**
     * @name gitTreesCreate
     * @request POST:/repos/{owner}/{repo}/git/trees
     * @description Create a Tree. The tree creation API will take nested entries as well. If both a tree and a nested path modifying that tree are specified, it will overwrite the contents of that tree with the new path contents and write a new tree out.
     */
    gitTreesCreate: (
      owner: string,
      repo: string,
      body: Tree,
      params?: RequestParams,
    ) => Promise<HttpResponse<Trees, unknown>>;
    /**
     * @name gitTreesDetail
     * @request GET:/repos/{owner}/{repo}/git/trees/{shaCode}
     * @description Get a Tree.
     */
    gitTreesDetail: (
      owner: string,
      repo: string,
      shaCode: string,
      query?: {
        recursive?: number;
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<Tree, unknown>>;
    /**
     * @name hooksDetail
     * @request GET:/repos/{owner}/{repo}/hooks
     * @description Get list of hooks.
     */
    hooksDetail: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<Hook, unknown>>;
    /**
     * @name hooksCreate
     * @request POST:/repos/{owner}/{repo}/hooks
     * @description Create a hook.
     */
    hooksCreate: (
      owner: string,
      repo: string,
      body: HookBody,
      params?: RequestParams,
    ) => Promise<HttpResponse<Hook, unknown>>;
    /**
     * @name hooksDelete
     * @request DELETE:/repos/{owner}/{repo}/hooks/{hookId}
     * @description Delete a hook.
     */
    hooksDelete: (
      owner: string,
      repo: string,
      hookId: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name hooksDetail
     * @request GET:/repos/{owner}/{repo}/hooks/{hookId}
     * @description Get single hook.
     * @originalName hooksDetail
     * @duplicate
     */
    hooksDetail2: (
      owner: string,
      repo: string,
      hookId: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<Hook, unknown>>;
    /**
     * @name hooksPartialUpdate
     * @request PATCH:/repos/{owner}/{repo}/hooks/{hookId}
     * @description Edit a hook.
     */
    hooksPartialUpdate: (
      owner: string,
      repo: string,
      hookId: number,
      body: HookBody,
      params?: RequestParams,
    ) => Promise<HttpResponse<Hook, unknown>>;
    /**
     * @name hooksTestsCreate
     * @request POST:/repos/{owner}/{repo}/hooks/{hookId}/tests
     * @description Test a push hook. This will trigger the hook with the latest push to the current repository if the hook is subscribed to push events. If the hook is not subscribed to push events, the server will respond with 204 but no test POST will be generated. Note: Previously /repos/:owner/:repo/hooks/:id/tes
     */
    hooksTestsCreate: (
      owner: string,
      repo: string,
      hookId: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name issuesDetail
     * @request GET:/repos/{owner}/{repo}/issues
     * @description List issues for a repository.
     */
    issuesDetail: (
      owner: string,
      repo: string,
      query: {
        filter: "assigned" | "created" | "mentioned" | "subscribed" | "all";
        state: "open" | "closed";
        labels: string;
        sort: "created" | "updated" | "comments";
        direction: "asc" | "desc";
        since?: string;
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<Issues, unknown>>;
    /**
     * @name issuesCreate
     * @request POST:/repos/{owner}/{repo}/issues
     * @description Create an issue. Any user with pull access to a repository can create an issue.
     */
    issuesCreate: (
      owner: string,
      repo: string,
      body: Issue,
      params?: RequestParams,
    ) => Promise<HttpResponse<Issue, unknown>>;
    /**
     * @name issuesCommentsDetail
     * @request GET:/repos/{owner}/{repo}/issues/comments
     * @description List comments in a repository.
     */
    issuesCommentsDetail: (
      owner: string,
      repo: string,
      query?: {
        direction?: string;
        sort?: "created" | "updated";
        since?: string;
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<IssuesComments, unknown>>;
    /**
     * @name issuesCommentsDelete
     * @request DELETE:/repos/{owner}/{repo}/issues/comments/{commentId}
     * @description Delete a comment.
     */
    issuesCommentsDelete: (
      owner: string,
      repo: string,
      commentId: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name issuesCommentsDetail
     * @request GET:/repos/{owner}/{repo}/issues/comments/{commentId}
     * @description Get a single comment.
     * @originalName issuesCommentsDetail
     * @duplicate
     */
    issuesCommentsDetail2: (
      owner: string,
      repo: string,
      commentId: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<IssuesComment, unknown>>;
    /**
     * @name issuesCommentsPartialUpdate
     * @request PATCH:/repos/{owner}/{repo}/issues/comments/{commentId}
     * @description Edit a comment.
     */
    issuesCommentsPartialUpdate: (
      owner: string,
      repo: string,
      commentId: number,
      body: CommentBody,
      params?: RequestParams,
    ) => Promise<HttpResponse<IssuesComment, unknown>>;
    /**
     * @name issuesEventsDetail
     * @request GET:/repos/{owner}/{repo}/issues/events
     * @description List issue events for a repository.
     */
    issuesEventsDetail: (
      owner: string,
      repo: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<IssueEvents, unknown>>;
    /**
     * @name issuesEventsDetail
     * @request GET:/repos/{owner}/{repo}/issues/events/{eventId}
     * @description Get a single event.
     * @originalName issuesEventsDetail
     * @duplicate
     */
    issuesEventsDetail2: (
      owner: string,
      repo: string,
      eventId: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<IssueEvent, unknown>>;
    /**
     * @name issuesDetail
     * @request GET:/repos/{owner}/{repo}/issues/{number}
     * @description Get a single issue
     * @originalName issuesDetail
     * @duplicate
     */
    issuesDetail2: (
      owner: string,
      repo: string,
      number: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<Issue, unknown>>;
    /**
     * @name issuesPartialUpdate
     * @request PATCH:/repos/{owner}/{repo}/issues/{number}
     * @description Edit an issue. Issue owners and users with push access can edit an issue.
     */
    issuesPartialUpdate: (
      owner: string,
      repo: string,
      number: number,
      body: Issue,
      params?: RequestParams,
    ) => Promise<HttpResponse<Issue, unknown>>;
    /**
     * @name issuesCommentsDetail
     * @request GET:/repos/{owner}/{repo}/issues/{number}/comments
     * @description List comments on an issue.
     * @originalName issuesCommentsDetail
     * @duplicate
     */
    issuesCommentsDetail3: (
      owner: string,
      repo: string,
      number: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<IssuesComments, unknown>>;
    /**
     * @name issuesCommentsCreate
     * @request POST:/repos/{owner}/{repo}/issues/{number}/comments
     * @description Create a comment.
     */
    issuesCommentsCreate: (
      owner: string,
      repo: string,
      number: number,
      body: CommentBody,
      params?: RequestParams,
    ) => Promise<HttpResponse<IssuesComment, unknown>>;
    /**
     * @name issuesEventsDetail
     * @request GET:/repos/{owner}/{repo}/issues/{number}/events
     * @description List events for an issue.
     * @originalName issuesEventsDetail
     * @duplicate
     */
    issuesEventsDetail3: (
      owner: string,
      repo: string,
      number: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<IssueEvents, unknown>>;
    /**
     * @name issuesLabelsDelete
     * @request DELETE:/repos/{owner}/{repo}/issues/{number}/labels
     * @description Remove all labels from an issue.
     */
    issuesLabelsDelete: (
      owner: string,
      repo: string,
      number: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name issuesLabelsDetail
     * @request GET:/repos/{owner}/{repo}/issues/{number}/labels
     * @description List labels on an issue.
     */
    issuesLabelsDetail: (
      owner: string,
      repo: string,
      number: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<Labels, unknown>>;
    /**
     * @name issuesLabelsCreate
     * @request POST:/repos/{owner}/{repo}/issues/{number}/labels
     * @description Add labels to an issue.
     */
    issuesLabelsCreate: (
      owner: string,
      repo: string,
      number: number,
      body: EmailsPost,
      params?: RequestParams,
    ) => Promise<HttpResponse<Label, unknown>>;
    /**
     * @name issuesLabelsUpdate
     * @request PUT:/repos/{owner}/{repo}/issues/{number}/labels
     * @description Replace all labels for an issue. Sending an empty array ([]) will remove all Labels from the Issue.
     */
    issuesLabelsUpdate: (
      owner: string,
      repo: string,
      number: number,
      body: EmailsPost,
      params?: RequestParams,
    ) => Promise<HttpResponse<Label, unknown>>;
    /**
     * @name issuesLabelsDelete
     * @request DELETE:/repos/{owner}/{repo}/issues/{number}/labels/{name}
     * @description Remove a label from an issue.
     * @originalName issuesLabelsDelete
     * @duplicate
     */
    issuesLabelsDelete2: (
      owner: string,
      repo: string,
      number: number,
      name: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name keysDetail
     * @request GET:/repos/{owner}/{repo}/keys
     * @description Get list of keys.
     */
    keysDetail: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<Keys, unknown>>;
    /**
     * @name keysCreate
     * @request POST:/repos/{owner}/{repo}/keys
     * @description Create a key.
     */
    keysCreate: (
      owner: string,
      repo: string,
      body: UserKeysPost,
      params?: RequestParams,
    ) => Promise<HttpResponse<UserKeysKeyId, unknown>>;
    /**
     * @name keysDelete
     * @request DELETE:/repos/{owner}/{repo}/keys/{keyId}
     * @description Delete a key.
     */
    keysDelete: (
      owner: string,
      repo: string,
      keyId: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name keysDetail
     * @request GET:/repos/{owner}/{repo}/keys/{keyId}
     * @description Get a key
     * @originalName keysDetail
     * @duplicate
     */
    keysDetail2: (
      owner: string,
      repo: string,
      keyId: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<UserKeysKeyId, unknown>>;
    /**
     * @name labelsDetail
     * @request GET:/repos/{owner}/{repo}/labels
     * @description List all labels for this repository.
     */
    labelsDetail: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<Labels, unknown>>;
    /**
     * @name labelsCreate
     * @request POST:/repos/{owner}/{repo}/labels
     * @description Create a label.
     */
    labelsCreate: (
      owner: string,
      repo: string,
      body: EmailsPost,
      params?: RequestParams,
    ) => Promise<HttpResponse<Label, unknown>>;
    /**
     * @name labelsDelete
     * @request DELETE:/repos/{owner}/{repo}/labels/{name}
     * @description Delete a label.
     */
    labelsDelete: (
      owner: string,
      repo: string,
      name: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name labelsDetail
     * @request GET:/repos/{owner}/{repo}/labels/{name}
     * @description Get a single label.
     * @originalName labelsDetail
     * @duplicate
     */
    labelsDetail2: (
      owner: string,
      repo: string,
      name: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<Label, unknown>>;
    /**
     * @name labelsPartialUpdate
     * @request PATCH:/repos/{owner}/{repo}/labels/{name}
     * @description Update a label.
     */
    labelsPartialUpdate: (
      owner: string,
      repo: string,
      name: string,
      body: EmailsPost,
      params?: RequestParams,
    ) => Promise<HttpResponse<Label, unknown>>;
    /**
     * @name languagesDetail
     * @request GET:/repos/{owner}/{repo}/languages
     * @description List languages. List languages for the specified repository. The value on the right of a language is the number of bytes of code written in that language.
     */
    languagesDetail: (
      owner: string,
      repo: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<Record<string, number>, unknown>>;
    /**
     * @name mergesCreate
     * @request POST:/repos/{owner}/{repo}/merges
     * @description Perform a merge.
     */
    mergesCreate: (
      owner: string,
      repo: string,
      body: MergesBody,
      params?: RequestParams,
    ) => Promise<HttpResponse<MergesSuccessful, unknown>>;
    /**
     * @name milestonesDetail
     * @request GET:/repos/{owner}/{repo}/milestones
     * @description List milestones for a repository.
     */
    milestonesDetail: (
      owner: string,
      repo: string,
      query?: {
        state?: "open" | "closed";
        direction?: string;
        sort?: "due_date" | "completeness";
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<Milestone, unknown>>;
    /**
     * @name milestonesCreate
     * @request POST:/repos/{owner}/{repo}/milestones
     * @description Create a milestone.
     */
    milestonesCreate: (
      owner: string,
      repo: string,
      body: MilestoneUpdate,
      params?: RequestParams,
    ) => Promise<HttpResponse<Milestone, unknown>>;
    /**
     * @name milestonesDelete
     * @request DELETE:/repos/{owner}/{repo}/milestones/{number}
     * @description Delete a milestone.
     */
    milestonesDelete: (
      owner: string,
      repo: string,
      number: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name milestonesDetail
     * @request GET:/repos/{owner}/{repo}/milestones/{number}
     * @description Get a single milestone.
     * @originalName milestonesDetail
     * @duplicate
     */
    milestonesDetail2: (
      owner: string,
      repo: string,
      number: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<Milestone, unknown>>;
    /**
     * @name milestonesPartialUpdate
     * @request PATCH:/repos/{owner}/{repo}/milestones/{number}
     * @description Update a milestone.
     */
    milestonesPartialUpdate: (
      owner: string,
      repo: string,
      number: number,
      body: MilestoneUpdate,
      params?: RequestParams,
    ) => Promise<HttpResponse<Milestone, unknown>>;
    /**
     * @name milestonesLabelsDetail
     * @request GET:/repos/{owner}/{repo}/milestones/{number}/labels
     * @description Get labels for every issue in a milestone.
     */
    milestonesLabelsDetail: (
      owner: string,
      repo: string,
      number: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<Labels, unknown>>;
    /**
     * @name notificationsDetail
     * @request GET:/repos/{owner}/{repo}/notifications
     * @description List your notifications in a repository List all notifications for the current user.
     */
    notificationsDetail: (
      owner: string,
      repo: string,
      query?: {
        all?: boolean;
        participating?: boolean;
        since?: string;
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<Notifications, unknown>>;
    /**
     * @name notificationsUpdate
     * @request PUT:/repos/{owner}/{repo}/notifications
     * @description Mark notifications as read in a repository. Marking all notifications in a repository as "read" removes them from the default view on GitHub.com.
     */
    notificationsUpdate: (
      owner: string,
      repo: string,
      body: NotificationMarkRead,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name pullsDetail
     * @request GET:/repos/{owner}/{repo}/pulls
     * @description List pull requests.
     */
    pullsDetail: (
      owner: string,
      repo: string,
      query?: {
        state?: "open" | "closed";
        head?: string;
        base?: string;
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<Pulls, unknown>>;
    /**
     * @name pullsCreate
     * @request POST:/repos/{owner}/{repo}/pulls
     * @description Create a pull request.
     */
    pullsCreate: (
      owner: string,
      repo: string,
      body: PullsPost,
      params?: RequestParams,
    ) => Promise<HttpResponse<Pulls, unknown>>;
    /**
     * @name pullsCommentsDetail
     * @request GET:/repos/{owner}/{repo}/pulls/comments
     * @description List comments in a repository. By default, Review Comments are ordered by ascending ID.
     */
    pullsCommentsDetail: (
      owner: string,
      repo: string,
      query?: {
        direction?: string;
        sort?: "created" | "updated";
        since?: string;
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<IssuesComments, unknown>>;
    /**
     * @name pullsCommentsDelete
     * @request DELETE:/repos/{owner}/{repo}/pulls/comments/{commentId}
     * @description Delete a comment.
     */
    pullsCommentsDelete: (
      owner: string,
      repo: string,
      commentId: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name pullsCommentsDetail
     * @request GET:/repos/{owner}/{repo}/pulls/comments/{commentId}
     * @description Get a single comment.
     * @originalName pullsCommentsDetail
     * @duplicate
     */
    pullsCommentsDetail2: (
      owner: string,
      repo: string,
      commentId: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<PullsComment, unknown>>;
    /**
     * @name pullsCommentsPartialUpdate
     * @request PATCH:/repos/{owner}/{repo}/pulls/comments/{commentId}
     * @description Edit a comment.
     */
    pullsCommentsPartialUpdate: (
      owner: string,
      repo: string,
      commentId: number,
      body: CommentBody,
      params?: RequestParams,
    ) => Promise<HttpResponse<PullsComment, unknown>>;
    /**
     * @name pullsDetail
     * @request GET:/repos/{owner}/{repo}/pulls/{number}
     * @description Get a single pull request.
     * @originalName pullsDetail
     * @duplicate
     */
    pullsDetail2: (
      owner: string,
      repo: string,
      number: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<PullRequest, unknown>>;
    /**
     * @name pullsPartialUpdate
     * @request PATCH:/repos/{owner}/{repo}/pulls/{number}
     * @description Update a pull request.
     */
    pullsPartialUpdate: (
      owner: string,
      repo: string,
      number: number,
      body: PullUpdate,
      params?: RequestParams,
    ) => Promise<HttpResponse<Repo, unknown>>;
    /**
     * @name pullsCommentsDetail
     * @request GET:/repos/{owner}/{repo}/pulls/{number}/comments
     * @description List comments on a pull request.
     * @originalName pullsCommentsDetail
     * @duplicate
     */
    pullsCommentsDetail3: (
      owner: string,
      repo: string,
      number: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<PullsComment, unknown>>;
    /**
     * @name pullsCommentsCreate
     * @request POST:/repos/{owner}/{repo}/pulls/{number}/comments
     * @description Create a comment. #TODO Alternative input ( http://developer.github.com/v3/pulls/comments/ ) description: | Alternative Input. Instead of passing commit_id, path, and position you can reply to an existing Pull Request Comment like this: body Required string in_reply_to Required number - Comment id to reply to.
     */
    pullsCommentsCreate: (
      owner: string,
      repo: string,
      number: number,
      body: PullsCommentPost,
      params?: RequestParams,
    ) => Promise<HttpResponse<PullsComment, unknown>>;
    /**
     * @name pullsCommitsDetail
     * @request GET:/repos/{owner}/{repo}/pulls/{number}/commits
     * @description List commits on a pull request.
     */
    pullsCommitsDetail: (
      owner: string,
      repo: string,
      number: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<Commits, unknown>>;
    /**
     * @name pullsFilesDetail
     * @request GET:/repos/{owner}/{repo}/pulls/{number}/files
     * @description List pull requests files.
     */
    pullsFilesDetail: (
      owner: string,
      repo: string,
      number: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<Pulls, unknown>>;
    /**
     * @name pullsMergeDetail
     * @request GET:/repos/{owner}/{repo}/pulls/{number}/merge
     * @description Get if a pull request has been merged.
     */
    pullsMergeDetail: (
      owner: string,
      repo: string,
      number: number,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name pullsMergeUpdate
     * @request PUT:/repos/{owner}/{repo}/pulls/{number}/merge
     * @description Merge a pull request (Merge Button's)
     */
    pullsMergeUpdate: (
      owner: string,
      repo: string,
      number: number,
      body: MergePullBody,
      params?: RequestParams,
    ) => Promise<HttpResponse<Merge, unknown>>;
    /**
     * @name readmeDetail
     * @request GET:/repos/{owner}/{repo}/readme
     * @description Get the README. This method returns the preferred README for a repository.
     */
    readmeDetail: (
      owner: string,
      repo: string,
      query?: {
        ref?: string;
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<ContentsPath, unknown>>;
    /**
     * @name releasesDetail
     * @request GET:/repos/{owner}/{repo}/releases
     * @description Users with push access to the repository will receive all releases (i.e., published releases and draft releases). Users with pull access will receive published releases only
     */
    releasesDetail: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<Releases, unknown>>;
    /**
     * @name releasesCreate
     * @request POST:/repos/{owner}/{repo}/releases
     * @description Create a release Users with push access to the repository can create a release.
     */
    releasesCreate: (
      owner: string,
      repo: string,
      body: ReleaseCreate,
      params?: RequestParams,
    ) => Promise<HttpResponse<Release, unknown>>;
    /**
     * @name releasesAssetsDelete
     * @request DELETE:/repos/{owner}/{repo}/releases/assets/{id}
     * @description Delete a release asset
     */
    releasesAssetsDelete: (
      owner: string,
      repo: string,
      id: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name releasesAssetsDetail
     * @request GET:/repos/{owner}/{repo}/releases/assets/{id}
     * @description Get a single release asset
     */
    releasesAssetsDetail: (
      owner: string,
      repo: string,
      id: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<Asset, unknown>>;
    /**
     * @name releasesAssetsPartialUpdate
     * @request PATCH:/repos/{owner}/{repo}/releases/assets/{id}
     * @description Edit a release asset Users with push access to the repository can edit a release asset.
     */
    releasesAssetsPartialUpdate: (
      owner: string,
      repo: string,
      id: string,
      body: AssetPatch,
      params?: RequestParams,
    ) => Promise<HttpResponse<Asset, unknown>>;
    /**
     * @name releasesDelete
     * @request DELETE:/repos/{owner}/{repo}/releases/{id}
     * @description Users with push access to the repository can delete a release.
     */
    releasesDelete: (
      owner: string,
      repo: string,
      id: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name releasesDetail
     * @request GET:/repos/{owner}/{repo}/releases/{id}
     * @description Get a single release
     * @originalName releasesDetail
     * @duplicate
     */
    releasesDetail2: (
      owner: string,
      repo: string,
      id: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<Release, unknown>>;
    /**
     * @name releasesPartialUpdate
     * @request PATCH:/repos/{owner}/{repo}/releases/{id}
     * @description Users with push access to the repository can edit a release
     */
    releasesPartialUpdate: (
      owner: string,
      repo: string,
      id: string,
      body: ReleaseCreate,
      params?: RequestParams,
    ) => Promise<HttpResponse<Release, unknown>>;
    /**
     * @name releasesAssetsDetail
     * @request GET:/repos/{owner}/{repo}/releases/{id}/assets
     * @description List assets for a release
     * @originalName releasesAssetsDetail
     * @duplicate
     */
    releasesAssetsDetail2: (
      owner: string,
      repo: string,
      id: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<Assets, unknown>>;
    /**
     * @name stargazersDetail
     * @request GET:/repos/{owner}/{repo}/stargazers
     * @description List Stargazers.
     */
    stargazersDetail: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<Users, unknown>>;
    /**
     * @name statsCodeFrequencyDetail
     * @request GET:/repos/{owner}/{repo}/stats/code_frequency
     * @description Get the number of additions and deletions per week. Returns a weekly aggregate of the number of additions and deletions pushed to a repository.
     */
    statsCodeFrequencyDetail: (
      owner: string,
      repo: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<CodeFrequencyStats, unknown>>;
    /**
     * @name statsCommitActivityDetail
     * @request GET:/repos/{owner}/{repo}/stats/commit_activity
     * @description Get the last year of commit activity data. Returns the last year of commit activity grouped by week. The days array is a group of commits per day, starting on Sunday.
     */
    statsCommitActivityDetail: (
      owner: string,
      repo: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<CommitActivityStats, unknown>>;
    /**
     * @name statsContributorsDetail
     * @request GET:/repos/{owner}/{repo}/stats/contributors
     * @description Get contributors list with additions, deletions, and commit counts.
     */
    statsContributorsDetail: (
      owner: string,
      repo: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<ContributorsStats, unknown>>;
    /**
     * @name statsParticipationDetail
     * @request GET:/repos/{owner}/{repo}/stats/participation
     * @description Get the weekly commit count for the repo owner and everyone else.
     */
    statsParticipationDetail: (
      owner: string,
      repo: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<ParticipationStats, unknown>>;
    /**
     * @name statsPunchCardDetail
     * @request GET:/repos/{owner}/{repo}/stats/punch_card
     * @description Get the number of commits per hour in each day. Each array contains the day number, hour number, and number of commits 0-6 Sunday - Saturday 0-23 Hour of day Number of commits For example, [2, 14, 25] indicates that there were 25 total commits, during the 2.00pm hour on Tuesdays. All times are based on the time zone of individual commits.
     */
    statsPunchCardDetail: (
      owner: string,
      repo: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<CodeFrequencyStats, unknown>>;
    /**
     * @name statusesDetail
     * @request GET:/repos/{owner}/{repo}/statuses/{ref}
     * @description List Statuses for a specific Ref.
     */
    statusesDetail: (
      owner: string,
      repo: string,
      ref: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<Ref, unknown>>;
    /**
     * @name statusesCreate
     * @request POST:/repos/{owner}/{repo}/statuses/{ref}
     * @description Create a Status.
     */
    statusesCreate: (
      owner: string,
      repo: string,
      ref: string,
      body: HeadBranch,
      params?: RequestParams,
    ) => Promise<HttpResponse<Ref, unknown>>;
    /**
     * @name subscribersDetail
     * @request GET:/repos/{owner}/{repo}/subscribers
     * @description List watchers.
     */
    subscribersDetail: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<Users, unknown>>;
    /**
     * @name subscriptionDelete
     * @request DELETE:/repos/{owner}/{repo}/subscription
     * @description Delete a Repository Subscription.
     */
    subscriptionDelete: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name subscriptionDetail
     * @request GET:/repos/{owner}/{repo}/subscription
     * @description Get a Repository Subscription.
     */
    subscriptionDetail: (
      owner: string,
      repo: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<Subscription, unknown>>;
    /**
     * @name subscriptionUpdate
     * @request PUT:/repos/{owner}/{repo}/subscription
     * @description Set a Repository Subscription
     */
    subscriptionUpdate: (
      owner: string,
      repo: string,
      body: SubscriptionBody,
      params?: RequestParams,
    ) => Promise<HttpResponse<Subscription, unknown>>;
    /**
     * @name tagsDetail
     * @request GET:/repos/{owner}/{repo}/tags
     * @description Get list of tags.
     */
    tagsDetail: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<Tags, unknown>>;
    /**
     * @name teamsDetail
     * @request GET:/repos/{owner}/{repo}/teams
     * @description Get list of teams
     */
    teamsDetail: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<Teams, unknown>>;
    /**
     * @name watchersDetail
     * @request GET:/repos/{owner}/{repo}/watchers
     * @description List Stargazers. New implementation.
     */
    watchersDetail: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<Users, unknown>>;
    /**
     * @name reposDetail
     * @request GET:/repos/{owner}/{repo}/{archive_format}/{path}
     * @description Get archive link. This method will return a 302 to a URL to download a tarball or zipball archive for a repository. Please make sure your HTTP framework is configured to follow redirects or you will need to use the Location header to make a second GET request. Note: For private repositories, these links are temporary and expire quickly.
     * @originalName reposDetail
     * @duplicate
     */
    reposDetail2: (
      owner: string,
      repo: string,
      archive_format: "tarball" | "zipball",
      path: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
  };
  repositories: {
    /**
     * @name repositoriesList
     * @request GET:/repositories
     * @description List all public repositories. This provides a dump of every public repository, in the order that they were created. Note: Pagination is powered exclusively by the since parameter. is the Link header to get the URL for the next page of repositories.
     */
    repositoriesList: (
      query?: {
        since?: string;
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<Repos, unknown>>;
  };
  search: {
    /**
     * @name codeList
     * @request GET:/search/code
     * @description Search code.
     */
    codeList: (
      query: {
        order?: "desc" | "asc";
        q: string;
        sort?: "indexed";
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<SearchCode, unknown>>;
    /**
     * @name issuesList
     * @request GET:/search/issues
     * @description Find issues by state and keyword. (This method returns up to 100 results per page.)
     */
    issuesList: (
      query: {
        order?: "desc" | "asc";
        q: string;
        sort?: "updated" | "created" | "comments";
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<SearchIssues, unknown>>;
    /**
     * @name repositoriesList
     * @request GET:/search/repositories
     * @description Search repositories.
     */
    repositoriesList: (
      query: {
        order?: "desc" | "asc";
        q: string;
        sort?: "stars" | "forks" | "updated";
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<SearchRepositories, unknown>>;
    /**
     * @name usersList
     * @request GET:/search/users
     * @description Search users.
     */
    usersList: (
      query: {
        order?: "desc" | "asc";
        q: string;
        sort?: "followers" | "repositories" | "joined";
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<SearchUsers, unknown>>;
  };
  teams: {
    /**
     * @name teamsDelete
     * @request DELETE:/teams/{teamId}
     * @description Delete team. In order to delete a team, the authenticated user must be an owner of the org that the team is associated with.
     */
    teamsDelete: (teamId: number, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name teamsDetail
     * @request GET:/teams/{teamId}
     * @description Get team.
     */
    teamsDetail: (teamId: number, params?: RequestParams) => Promise<HttpResponse<Team, unknown>>;
    /**
     * @name teamsPartialUpdate
     * @request PATCH:/teams/{teamId}
     * @description Edit team. In order to edit a team, the authenticated user must be an owner of the org that the team is associated with.
     */
    teamsPartialUpdate: (
      teamId: number,
      body: EditTeam,
      params?: RequestParams,
    ) => Promise<HttpResponse<Team, unknown>>;
    /**
     * @name membersDetail
     * @request GET:/teams/{teamId}/members
     * @description List team members. In order to list members in a team, the authenticated user must be a member of the team.
     */
    membersDetail: (teamId: number, params?: RequestParams) => Promise<HttpResponse<Users, unknown>>;
    /**
     * @name membersDelete
     * @request DELETE:/teams/{teamId}/members/{username}
     * @description The "Remove team member" API is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Remove team membership API instead. It allows you to remove both active and pending memberships. Remove team member. In order to remove a user from a team, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. NOTE This does not delete the user, it just remove them from the team.
     */
    membersDelete: (teamId: number, username: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name membersDetail
     * @request GET:/teams/{teamId}/members/{username}
     * @description The "Get team member" API is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Get team membership API instead. It allows you to get both active and pending memberships. Get team member. In order to get if a user is a member of a team, the authenticated user mus be a member of the team.
     * @originalName membersDetail
     * @duplicate
     */
    membersDetail2: (teamId: number, username: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name membersUpdate
     * @request PUT:/teams/{teamId}/members/{username}
     * @description The API (described below) is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Add team membership API instead. It allows you to invite new organization members to your teams. Add team member. In order to add a user to a team, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with.
     */
    membersUpdate: (teamId: number, username: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name membershipsDelete
     * @request DELETE:/teams/{teamId}/memberships/{username}
     * @description Remove team membership. In order to remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. NOTE: This does not delete the user, it just removes their membership from the team.
     */
    membershipsDelete: (
      teamId: number,
      username: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name membershipsDetail
     * @request GET:/teams/{teamId}/memberships/{username}
     * @description Get team membership. In order to get a user's membership with a team, the authenticated user must be a member of the team or an owner of the team's organization.
     */
    membershipsDetail: (
      teamId: number,
      username: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<TeamMembership, unknown>>;
    /**
     * @name membershipsUpdate
     * @request PUT:/teams/{teamId}/memberships/{username}
     * @description Add team membership. In order to add a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. If the user is already a part of the team's organization (meaning they're on at least one other team in the organization), this endpoint will add the user to the team. If the user is completely unaffiliated with the team's organization (meaning they're on none of the organization's teams), this endpoint will send an invitation to the user via email. This newly-created membership will be in the 'pending' state until the user accepts the invitation, at which point the membership will transition to the 'active' state and the user will be added as a member of the team.
     */
    membershipsUpdate: (
      teamId: number,
      username: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<TeamMembership, unknown>>;
    /**
     * @name reposDetail
     * @request GET:/teams/{teamId}/repos
     * @description List team repos
     */
    reposDetail: (teamId: number, params?: RequestParams) => Promise<HttpResponse<Repos, unknown>>;
    /**
     * @name reposDelete
     * @request DELETE:/teams/{teamId}/repos/{owner}/{repo}
     * @description In order to remove a repository from a team, the authenticated user must be an owner of the org that the team is associated with. NOTE: This does not delete the repository, it just removes it from the team.
     */
    reposDelete: (
      teamId: number,
      owner: string,
      repo: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name reposDetail
     * @request GET:/teams/{teamId}/repos/{owner}/{repo}
     * @description Check if a team manages a repository
     * @originalName reposDetail
     * @duplicate
     */
    reposDetail2: (
      teamId: number,
      owner: string,
      repo: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name reposUpdate
     * @request PUT:/teams/{teamId}/repos/{owner}/{repo}
     * @description In order to add a repository to a team, the authenticated user must be an owner of the org that the team is associated with. Also, the repository must be owned by the organization, or a direct fork of a repository owned by the organization.
     */
    reposUpdate: (
      teamId: number,
      owner: string,
      repo: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
  };
  user: {
    /**
     * @name userList
     * @request GET:/user
     * @description Get the authenticated user.
     */
    userList: (params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name userPartialUpdate
     * @request PATCH:/user
     * @description Update the authenticated user.
     */
    userPartialUpdate: (body: UserUpdate, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name emailsDelete
     * @request DELETE:/user/emails
     * @description Delete email address(es). You can include a single email address or an array of addresses.
     */
    emailsDelete: (body: UserEmails, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name emailsList
     * @request GET:/user/emails
     * @description List email addresses for a user. In the final version of the API, this method will return an array of hashes with extended information for each email address indicating if the address has been verified and if it's primary email address for GitHub. Until API v3 is finalized, use the application/vnd.github.v3 media type to get other response format.
     */
    emailsList: (params?: RequestParams) => Promise<HttpResponse<UserEmails, unknown>>;
    /**
     * @name emailsCreate
     * @request POST:/user/emails
     * @description Add email address(es). You can post a single email address or an array of addresses.
     */
    emailsCreate: (body: EmailsPost, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name followersList
     * @request GET:/user/followers
     * @description List the authenticated user's followers
     */
    followersList: (params?: RequestParams) => Promise<HttpResponse<Users, unknown>>;
    /**
     * @name followingList
     * @request GET:/user/following
     * @description List who the authenticated user is following.
     */
    followingList: (params?: RequestParams) => Promise<HttpResponse<Users, unknown>>;
    /**
     * @name followingDelete
     * @request DELETE:/user/following/{username}
     * @description Unfollow a user. Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the user:follow scope.
     */
    followingDelete: (username: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name followingDetail
     * @request GET:/user/following/{username}
     * @description Check if you are following a user.
     */
    followingDetail: (username: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name followingUpdate
     * @request PUT:/user/following/{username}
     * @description Follow a user. Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the user:follow scope.
     */
    followingUpdate: (username: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name issuesList
     * @request GET:/user/issues
     * @description List issues. List all issues across owned and member repositories for the authenticated user.
     */
    issuesList: (
      query: {
        filter: "assigned" | "created" | "mentioned" | "subscribed" | "all";
        state: "open" | "closed";
        labels: string;
        sort: "created" | "updated" | "comments";
        direction: "asc" | "desc";
        since?: string;
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<Issues, unknown>>;
    /**
     * @name keysList
     * @request GET:/user/keys
     * @description List your public keys. Lists the current user's keys. Management of public keys via the API requires that you are authenticated through basic auth, or OAuth with the 'user', 'write:public_key' scopes.
     */
    keysList: (params?: RequestParams) => Promise<HttpResponse<Gitignore, unknown>>;
    /**
     * @name keysCreate
     * @request POST:/user/keys
     * @description Create a public key.
     */
    keysCreate: (body: UserKeysPost, params?: RequestParams) => Promise<HttpResponse<UserKeysKeyId, unknown>>;
    /**
     * @name keysDelete
     * @request DELETE:/user/keys/{keyId}
     * @description Delete a public key. Removes a public key. Requires that you are authenticated via Basic Auth or via OAuth with at least admin:public_key scope.
     */
    keysDelete: (keyId: number, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name keysDetail
     * @request GET:/user/keys/{keyId}
     * @description Get a single public key.
     */
    keysDetail: (keyId: number, params?: RequestParams) => Promise<HttpResponse<UserKeysKeyId, unknown>>;
    /**
     * @name orgsList
     * @request GET:/user/orgs
     * @description List public and private organizations for the authenticated user.
     */
    orgsList: (params?: RequestParams) => Promise<HttpResponse<Gitignore, unknown>>;
    /**
     * @name reposList
     * @request GET:/user/repos
     * @description List repositories for the authenticated user. Note that this does not include repositories owned by organizations which the user can access. You can lis user organizations and list organization repositories separately.
     */
    reposList: (
      query?: {
        type?: "all" | "public" | "private" | "forks" | "sources" | "member";
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<Repos, unknown>>;
    /**
     * @name reposCreate
     * @request POST:/user/repos
     * @description Create a new repository for the authenticated user. OAuth users must supply repo scope.
     */
    reposCreate: (body: PostRepo, params?: RequestParams) => Promise<HttpResponse<Repos, unknown>>;
    /**
     * @name starredList
     * @request GET:/user/starred
     * @description List repositories being starred by the authenticated user.
     */
    starredList: (
      query?: {
        direction?: string;
        sort?: "created" | "updated";
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<Gitignore, unknown>>;
    /**
     * @name starredDelete
     * @request DELETE:/user/starred/{owner}/{repo}
     * @description Unstar a repository
     */
    starredDelete: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name starredDetail
     * @request GET:/user/starred/{owner}/{repo}
     * @description Check if you are starring a repository.
     */
    starredDetail: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name starredUpdate
     * @request PUT:/user/starred/{owner}/{repo}
     * @description Star a repository.
     */
    starredUpdate: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name subscriptionsList
     * @request GET:/user/subscriptions
     * @description List repositories being watched by the authenticated user.
     */
    subscriptionsList: (params?: RequestParams) => Promise<HttpResponse<Repos, unknown>>;
    /**
     * @name subscriptionsDelete
     * @request DELETE:/user/subscriptions/{owner}/{repo}
     * @description Stop watching a repository
     */
    subscriptionsDelete: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name subscriptionsDetail
     * @request GET:/user/subscriptions/{owner}/{repo}
     * @description Check if you are watching a repository.
     */
    subscriptionsDetail: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name subscriptionsUpdate
     * @request PUT:/user/subscriptions/{owner}/{repo}
     * @description Watch a repository.
     */
    subscriptionsUpdate: (owner: string, repo: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name teamsList
     * @request GET:/user/teams
     * @description List all of the teams across all of the organizations to which the authenticated user belongs. This method requires user or repo scope when authenticating via OAuth.
     */
    teamsList: (params?: RequestParams) => Promise<HttpResponse<TeamsList, unknown>>;
  };
  users: {
    /**
     * @name usersList
     * @request GET:/users
     * @description Get all users. This provides a dump of every user, in the order that they signed up for GitHub. Note: Pagination is powered exclusively by the since parameter. Use the Link header to get the URL for the next page of users.
     */
    usersList: (
      query?: {
        since?: number;
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<Users, unknown>>;
    /**
     * @name usersDetail
     * @request GET:/users/{username}
     * @description Get a single user.
     */
    usersDetail: (username: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name eventsDetail
     * @request GET:/users/{username}/events
     * @description If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.
     */
    eventsDetail: (username: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name eventsOrgsDetail
     * @request GET:/users/{username}/events/orgs/{org}
     * @description This is the user's organization dashboard. You must be authenticated as the user to view this.
     */
    eventsOrgsDetail: (username: string, org: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name followersDetail
     * @request GET:/users/{username}/followers
     * @description List a user's followers
     */
    followersDetail: (username: string, params?: RequestParams) => Promise<HttpResponse<Users, unknown>>;
    /**
     * @name followingDetail
     * @request GET:/users/{username}/following/{targetUser}
     * @description Check if one user follows another.
     */
    followingDetail: (
      username: string,
      targetUser: string,
      params?: RequestParams,
    ) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name gistsDetail
     * @request GET:/users/{username}/gists
     * @description List a users gists.
     */
    gistsDetail: (
      username: string,
      query?: {
        since?: string;
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<Gists, unknown>>;
    /**
     * @name keysDetail
     * @request GET:/users/{username}/keys
     * @description List public keys for a user. Lists the verified public keys for a user. This is accessible by anyone.
     */
    keysDetail: (username: string, params?: RequestParams) => Promise<HttpResponse<Gitignore, unknown>>;
    /**
     * @name orgsDetail
     * @request GET:/users/{username}/orgs
     * @description List all public organizations for a user.
     */
    orgsDetail: (username: string, params?: RequestParams) => Promise<HttpResponse<Gitignore, unknown>>;
    /**
     * @name receivedEventsDetail
     * @request GET:/users/{username}/received_events
     * @description These are events that you'll only see public events.
     */
    receivedEventsDetail: (username: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name receivedEventsPublicDetail
     * @request GET:/users/{username}/received_events/public
     * @description List public events that a user has received
     */
    receivedEventsPublicDetail: (username: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name reposDetail
     * @request GET:/users/{username}/repos
     * @description List public repositories for the specified user.
     */
    reposDetail: (
      username: string,
      query?: {
        type?: "all" | "public" | "private" | "forks" | "sources" | "member";
      },
      params?: RequestParams,
    ) => Promise<HttpResponse<Repos, unknown>>;
    /**
     * @name starredDetail
     * @request GET:/users/{username}/starred
     * @description List repositories being starred by a user.
     */
    starredDetail: (username: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
    /**
     * @name subscriptionsDetail
     * @request GET:/users/{username}/subscriptions
     * @description List repositories being watched by a user.
     */
    subscriptionsDetail: (username: string, params?: RequestParams) => Promise<HttpResponse<any, unknown>>;
  };
}
export {};
