import { supabase } from "../supabase";
import type { TablesInsert } from "../../../database.types";

export const creator = {
  registerAsCreator: async (userId: string) => {
    const { data, error } = await supabase
      .from("creators")
      .insert({ user_id: userId })
      .select()
      .single();

    if (error) throw error;
    return data;
  },
  getProjects: async (userId: string) => {
    const { data, error } = await supabase
      .from("creatortoprojects")
      .select(
        `
        project_id,
        created_at,
        projects (
          id,
          description,
          created_at
        )
      `,
      )
      .eq("user_id", userId);

    if (error) throw error;
    return data;
  },
  postCreateProjects: async (
    userId: string,
    projectData: TablesInsert<"projects">,
  ) => {
    const { data: project, error: projectError } = await supabase
      .from("projects")
      .insert(projectData)
      .select()
      .single();

    if (projectError) throw projectError;

    const { data: relation, error: relationError } = await supabase
      .from("creatortoprojects")
      .insert({
        user_id: userId,
        project_id: project.id,
      })
      .select()
      .single();

    if (relationError) throw relationError;

    return { project, relation };
  },

  getProjectCandidates: async (developerId: string) => {
    const { data, error } = await supabase
      .from("projects")
      .select(
        `
        id,
        description,
        created_at
      `,
      )
      .not(
        "id",
        "in",
        supabase
          .from("swipes")
          .select("project_id")
          .eq("developer_id", developerId),
      );

    if (error) throw error;
    return data;
  },
};
