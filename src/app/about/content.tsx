import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostsSecction from "./posts-secction";
import ProjectsSecction from "./projects-secction";

export function Content() {
  return (
    <div>
      <Tabs defaultValue="posts" className="mb-16">
        <TabsList className="mb-8">
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="posts">
          <PostsSecction />
        </TabsContent>

        <TabsContent value="projects">
          <ProjectsSecction />
        </TabsContent>
      </Tabs>
    </div>
  );
}
