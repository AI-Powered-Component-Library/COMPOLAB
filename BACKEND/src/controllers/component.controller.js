import { createComponentValidationSchema, updateComponentValidationSchema } from "../validators/component.validator.js";
import componentService from "../services/component.service.js";
import { asyncHandler, AppError } from "../utils/asyncHandler.utils.js";

export const createComponent = asyncHandler(async (req, res) => {
  const { error } = createComponentValidationSchema.validate(req.body);

  if (error) {
    throw new AppError(400, error.details[0].message);
  }

  const component = await componentService.createComponent(req.body);
  
  res.success(201, "Component created successfully", component);
});

export const getComponentById = asyncHandler(async (req, res) => {
  const component = await componentService.getComponentById(req.params.id);
  res.success(200, "Component retrieved successfully", component);
});

export const getComponentsByUserId = asyncHandler(async (req, res) => {
  const components = await componentService.getComponentsByUserId(req.params.userId);
  res.success(200, "Components retrieved successfully", components);
});

export const getAllComponents = asyncHandler(async (req, res) => {
  const components = await componentService.getAllComponents();
  res.success(200, "All components retrieved successfully", components);
});

export const updateComponent = asyncHandler(async (req, res) => {
  const { error } = updateComponentValidationSchema.validate(req.body);

  if (error) {
    throw new AppError(400, error.details[0].message);
  }

  const updatedComponent = await componentService.updateComponent(req.params.id, req.body);
  res.success(200, "Component updated successfully", updatedComponent);
});

export const deleteComponent = asyncHandler(async (req, res) => {
  await componentService.deleteComponent(req.params.id);
  res.success(200, "Component deleted successfully");
});
